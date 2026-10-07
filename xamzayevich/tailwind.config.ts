import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./sections/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05060a",
        ink: "#f4f5f8",
        muted: "#8b90a0",
        line: "rgba(255,255,255,0.08)",
        brand: { blue: "#5b8cff", violet: "#8b5cf6", cyan: "#22d3ee" },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        float: { "0%,100%": { transform: "translate3d(0,0,0)" }, "50%": { transform: "translate3d(0,-24px,0)" } },
        blink: { "50%": { opacity: "0" } },
      },
      animation: { float: "float 14s ease-in-out infinite", blink: "blink 1s steps(1) infinite" },
    },
  },
  plugins: [],
};
export default config;
