import Reveal from "./Reveal";

export default function SectionHeading({ title, text }: { title: string; text?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{text}</p>}
    </Reveal>
  );
}
