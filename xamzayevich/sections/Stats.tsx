import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Stats() {
  return (
    <section aria-label="Highlights" className="pb-8">
      <Reveal className="container-x">
        <dl className="glass grid grid-cols-2 divide-line rounded-2xl lg:grid-cols-4 lg:divide-x">
          {site.stats.map((s, i) => (
            <div key={s.label} className={`p-6 sm:p-8 ${i < 2 ? "border-b border-line lg:border-b-0" : ""} ${i % 2 === 0 ? "border-r border-line lg:border-r-0" : ""}`}>
              <dt className="order-2 mt-1 text-sm text-muted">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
