"use client";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center pb-16 pt-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {site.badge}
          </motion.span>

          <h1 className="mt-8 font-semibold leading-[0.95] tracking-tighter">
            <motion.span
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease }}
              className="block text-2xl text-muted sm:text-3xl"
            >
              Hi, I&apos;m
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease }}
              className="mt-2 block text-[clamp(2.75rem,11.5vw,8rem)]"
            >
              {site.name}.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.32, ease }}
              className="grad-text mt-3 block pb-2 text-[clamp(1.9rem,6.5vw,4.25rem)]"
            >
              {site.title}.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            I design and build high-performance digital products, scalable web applications and modern software experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Magnetic><a href="#projects" className="btn-primary">View My Work</a></Magnetic>
            <Magnetic><a href="#contact" className="btn-ghost">Let&apos;s Talk</a></Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.6, ease }}
          className="glass relative overflow-hidden rounded-2xl shadow-[0_0_80px_-20px_rgba(139,92,246,0.45)]"
          aria-hidden
        >
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-3 font-mono text-xs text-muted">profile.ts</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-ink/85">
{`const developer = {
  name: "${site.name}",
  role: "${site.title}",
  focus: [
    "web apps",
    "saas",
    "apis",
    "ai",
  ],
  principle: "build systems that last",
};`}
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-brand-cyan" />
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
