import { Gauge, Globe, Layers, PenTool, Server, Sparkles, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/TiltCard";
import { services } from "@/data/skills";

const icons: Record<string, LucideIcon> = { globe: Globe, layers: Layers, server: Server, sparkles: Sparkles, pen: PenTool, gauge: Gauge };

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <SectionHeading title="What I Build" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <TiltCard className="glass group h-full rounded-2xl p-7 transition-all duration-300 hover:border-brand-violet/40 hover:shadow-[0_0_50px_-15px_rgba(139,92,246,0.55)]">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/25 to-brand-violet/25 text-brand-cyan">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-6 text-lg font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
