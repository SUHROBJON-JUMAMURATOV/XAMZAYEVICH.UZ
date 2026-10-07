"use client";
import Script from "next/script";
import { useState } from "react";
import { Send } from "lucide-react";
import Reveal from "@/components/Reveal";
import SocialIcons from "@/components/SocialIcons";
import { contactSchema } from "@/lib/validation";

type Status = { type: "idle" | "sending" | "ok" | "error"; message?: string };
const turnstileKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const field = "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-brand-blue/60 focus:outline-none";

export default function Contact() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const next: Record<string, string> = {};
      result.error.issues.forEach((i) => { next[String(i.path[0])] ??= i.message; });
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus({ type: "sending" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error ?? "Something went wrong.");
      form.reset();
      setStatus({ type: "ok", message: "Message sent. I'll reply by email soon." });
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  const Err = ({ k }: { k: string }) => (errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-xs text-rose-400">{errors[k]}</p> : null);

  return (
    <section id="contact" className="section">
      {turnstileKey && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />}
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">Let&apos;s Build Something Great.</h2>
          <p className="mt-5 max-w-md text-lg text-muted">Have an idea, project or opportunity? Let&apos;s turn it into something exceptional.</p>
          <div className="mt-8"><SocialIcons /></div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="glass space-y-4 rounded-3xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-muted">Name</label>
                <input id="name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby="name-err" />
                <Err k="name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-muted">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby="email-err" />
                <Err k="email" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm text-muted">Subject</label>
              <input id="subject" name="subject" className={field} aria-invalid={!!errors.subject} aria-describedby="subject-err" />
              <Err k="subject" />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-muted">Message</label>
              <textarea id="message" name="message" rows={5} className={`${field} resize-y`} aria-invalid={!!errors.message} aria-describedby="message-err" />
              <Err k="message" />
            </div>

            {/* Honeypot: hidden from people, bots fill it */}
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute left-[-9999px] h-0 w-0 opacity-0" />
            {turnstileKey && <div className="cf-turnstile" data-sitekey={turnstileKey} data-theme="dark" />}

            <button type="submit" disabled={status.type === "sending"} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
              <Send size={15} /> {status.type === "sending" ? "Sending…" : "Send Message"}
            </button>
            <p role="status" aria-live="polite" className={`text-sm ${status.type === "ok" ? "text-emerald-400" : "text-rose-400"}`}>{status.message}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
