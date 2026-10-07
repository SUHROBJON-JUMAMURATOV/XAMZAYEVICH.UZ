export type Project = {
  title: string;
  description: string;
  tech: string[];
  /** Optional image in /public, e.g. "/projects/ai-saas.jpg". Falls back to a generated gradient. */
  image?: string;
  github?: string;
  demo?: string;
};

// Placeholders — replace with your real projects. Empty links render as disabled buttons.
export const projects: Project[] = [
  {
    title: "AI SaaS Platform",
    description: "Intelligent platform designed to automate complex workflows and improve productivity.",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "AI"],
    github: "",
    demo: "",
  },
  {
    title: "Project 02",
    description: "Short description of the product, the problem it solves and your role.",
    tech: ["TypeScript", "Node.js", "Redis"],
  },
  {
    title: "Project 03",
    description: "Short description of the product, the problem it solves and your role.",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    title: "Project 04",
    description: "Short description of the product, the problem it solves and your role.",
    tech: ["Python", "Docker", "REST API"],
  },
];
