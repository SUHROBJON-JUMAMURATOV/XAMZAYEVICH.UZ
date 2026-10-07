import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { rateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const json = (body: object, status = 200) => NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

async function verifyTurnstile(token: string | undefined, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // disabled
  if (!token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    return Boolean((await res.json()).success);
  } catch { return false; }
}

export async function POST(req: Request) {
  // Same-origin check
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host && new URL(origin).host !== host) return json({ error: "Forbidden." }, 403);

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!rateLimit(`contact:${ip}`)) return json({ error: "Too many messages. Try again in a few minutes." }, 429);

  let raw: unknown;
  try { raw = await req.json(); } catch { return json({ error: "Invalid request." }, 400); }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) return json({ error: parsed.error.issues[0]?.message ?? "Invalid input." }, 400);
  const data = parsed.data;

  // Honeypot filled → pretend success so bots learn nothing
  if (data.website) return json({ ok: true });

  if (!(await verifyTurnstile(data["cf-turnstile-response"], ip))) return json({ error: "Spam check failed. Reload and try again." }, 400);

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.error("[contact] SMTP is not configured");
    return json({ error: "Contact form is not configured yet. Please email directly." }, 503);
  }

  try {
    const transport = nodemailer.createTransport({
      host: SMTP_HOST, port: Number(SMTP_PORT ?? 465), secure: SMTP_SECURE !== "false",
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transport.sendMail({
      from: CONTACT_FROM || SMTP_USER,
      to: CONTACT_TO,
      replyTo: { name: data.name.replace(/[\r\n]/g, " "), address: data.email },
      subject: `[xamzayevich.uz] ${data.subject.replace(/[\r\n]/g, " ")}`,
      text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
      html: `<p><b>${esc(data.name)}</b> &lt;${esc(data.email)}&gt;</p><p style="white-space:pre-wrap">${esc(data.message)}</p>`,
    });
    return json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return json({ error: "Could not send your message. Please try again later." }, 500);
  }
}
