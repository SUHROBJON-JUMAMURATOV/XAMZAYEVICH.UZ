import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="glass relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl">
            {site.portrait ? (
              <Image src={site.portrait} alt={`${site.name} portrait`} fill sizes="(max-width:1024px) 90vw, 400px" className="object-cover" />
            ) : (
              <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(91,140,255,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.3),transparent_55%)]">
                <span className="select-none text-[9rem] font-semibold tracking-tighter text-white/90">X</span>
              </div>
            )}
          </div>
        </Reveal>

        <div>
          <SectionHeading title="About Me" />
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-ink/90">
              I&apos;m a Senior Developer focused on building scalable, reliable and visually impressive digital products. I enjoy turning complex ideas into clean, efficient and user-friendly software.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              My approach combines engineering, design and performance to create products that are not only functional, but also memorable.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
