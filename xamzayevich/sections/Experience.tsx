import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading title="Experience" />
        <ol className="relative ml-2 border-l border-line">
          {experience.map((e, i) => (
            <li key={e.role} className="pb-12 pl-8 last:pb-0">
              <Reveal delay={i * 0.08}>
                <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-brand-cyan shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
                <p className="font-mono text-sm text-muted">{e.period}</p>
                <h3 className="mt-1 text-xl font-medium">{e.role}</h3>
                <p className="mt-2 max-w-xl text-muted">{e.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
