import Reveal from "@/components/Reveal";

export default function Philosophy() {
  return (
    <section aria-label="Development philosophy" className="section">
      <div className="container-x">
        <Reveal>
          <blockquote className="max-w-4xl text-[clamp(1.75rem,5vw,3.75rem)] font-semibold leading-[1.1] tracking-tight">
            <p className="grad-text pb-1">“Great software is not only about writing code.</p>
            <p className="text-ink/90">It&apos;s about solving problems, creating experiences and building systems that last.”</p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
