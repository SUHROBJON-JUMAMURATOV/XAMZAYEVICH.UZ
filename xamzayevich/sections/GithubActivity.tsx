import { Github } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

async function getContributions(user: string): Promise<{ days: Day[]; total: number } | null> {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(user)}?y=last`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const data = await res.json();
    const days: Day[] = data.contributions ?? [];
    return { days, total: days.reduce((a, d) => a + d.count, 0) };
  } catch {
    return null;
  }
}

const shade = ["bg-white/[0.06]", "bg-brand-blue/30", "bg-brand-blue/55", "bg-brand-violet/75", "bg-brand-cyan"];

export default async function GithubActivity() {
  const user = site.githubUsername.trim();
  const data = user ? await getContributions(user) : null;

  // Group into weeks (columns of 7)
  const weeks: Day[][] = [];
  if (data) for (let i = 0; i < data.days.length; i += 7) weeks.push(data.days.slice(i, i + 7));

  return (
    <section id="activity" className="section">
      <div className="container-x">
        <SectionHeading title="Building in Public" text={data ? undefined : "GitHub activity will appear here once a username is configured."} />
        <Reveal>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="flex items-center gap-2 text-sm text-muted"><Github size={16} /> {user ? `@${user}` : "GITHUB_USERNAME not set"}</span>
              {data && <span className="text-sm text-muted">{data.total.toLocaleString()} contributions in the last year</span>}
            </div>
            <div className="overflow-x-auto pb-2" role="img" aria-label="GitHub contribution graph">
              <div className="flex min-w-max gap-[3px]">
                {(weeks.length ? weeks : Array.from({ length: 52 }, () => Array.from({ length: 7 }, () => ({ level: 0 }) as Day))).map((w, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {w.map((d, di) => <span key={di} title={d.date ? `${d.count} on ${d.date}` : undefined} className={`h-[11px] w-[11px] rounded-[3px] ${shade[d.level]}`} />)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
