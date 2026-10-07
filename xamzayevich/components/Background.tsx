/** Pure-CSS background: grid, glow orbs and noise. No JS, no layout cost. */
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 animate-float rounded-full bg-brand-violet/20 blur-[120px]" />
      <div className="absolute right-[-10%] top-1/3 h-[420px] w-[420px] animate-float rounded-full bg-brand-blue/15 blur-[120px] [animation-delay:-6s]" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[420px] w-[420px] animate-float rounded-full bg-brand-cyan/10 blur-[120px] [animation-delay:-10s]" />
      <div className="noise absolute inset-0" />
    </div>
  );
}
