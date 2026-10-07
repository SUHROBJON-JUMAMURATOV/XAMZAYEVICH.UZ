export const site = {
  name: "Xamzayevich",
  brand: "XAMZAYEVICH",
  title: "Senior Developer",
  domain: "xamzayevich.uz",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://xamzayevich.uz",
  seoTitle: "Xamzayevich — Senior Developer",
  description:
    "Xamzayevich is a Senior Developer building high-performance web applications, scalable software systems and modern digital products.",
  badge: "Available for selected projects",
  // Replace these values with your real links. Empty string = hidden.
  socials: {
    github: "https://github.com/",
    telegram: "https://t.me/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    email: "mailto:hello@xamzayevich.uz",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  // Placeholders: edit with real numbers or remove entries.
  stats: [
    { value: "Senior", label: "Developer" },
    { value: "20+", label: "Projects / Digital Products" },
    { value: "100%", label: "Focus on Quality" },
    { value: "24/7", label: "Passion for Technology" },
  ],
  githubUsername: process.env.GITHUB_USERNAME ?? "",
  // Optional portrait: put a file in /public and set e.g. "/portrait.jpg"
  portrait: "",
} as const;
