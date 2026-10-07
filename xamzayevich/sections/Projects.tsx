import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects, type Project } from "@/data/projects";

function LinkBtn({ href, children, primary }: { href?: string; children: React.ReactNode; primary?: boolean }) {
  const cls = primary ? "btn-primary" : "btn-ghost";
  if (!href) return <span aria-disabled="true" className={`${cls} cursor-not-allowed opacity-40`}>{children}</span>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
}

function Thumb({ p, i }: { p: Project; i: number }) {
  if (p.image) return <Image src={p.image} alt={`${p.title} preview`} fill loading="lazy" sizes="(max-width:1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />;
  const hue = [220, 265, 190, 245][i % 4];
  return (
    <div
      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
      style={{ background: `radial-gradient(circle at 25% 20%, hsla(${hue},90%,62%,.45), transparent 55%), radial-gradient(circle at 80% 85%, hsla(${hue + 50},85%,60%,.35), transparent 55%), #0a0c14` }}
    >
      <span className="absolute bottom-4 left-5 font-mono text-xs text-white/50">{`~/projects/${p.title.toLowerCase().replace(/\s+/g, "-")}`}</span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading title="Featured Projects" />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <article className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-colors hover:border-white/20">
                <div className="relative aspect-[16/9] overflow-hidden border-b border-line"><Thumb p={p} i={i} /></div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-muted">{p.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
                  <div className="mt-auto flex flex-wrap gap-3 pt-7">
                    <LinkBtn href={p.demo} primary><ExternalLink size={15} /> Live Demo</LinkBtn>
                    <LinkBtn href={p.github}><Github size={15} /> View Code</LinkBtn>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
