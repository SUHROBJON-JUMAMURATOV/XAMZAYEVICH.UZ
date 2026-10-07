export const skillGroups = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express", "Python", "REST API", "Authentication", "Database architecture"] },
  { title: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { title: "DevOps / Tools", items: ["Git", "GitHub", "Docker", "Linux", "CI/CD", "Cloud deployment"] },
  { title: "Other", items: ["API Development", "System Architecture", "Performance Optimization", "Security", "AI Integration"] },
] as const;

export const services = [
  { icon: "globe", title: "Web Applications", text: "Modern, scalable and high-performance web applications." },
  { icon: "layers", title: "SaaS Products", text: "Complete SaaS platforms from architecture to production." },
  { icon: "server", title: "Backend Systems", text: "Secure and scalable APIs and backend infrastructure." },
  { icon: "sparkles", title: "AI Integrations", text: "Modern AI-powered features and intelligent automation." },
  { icon: "pen", title: "UI/UX Development", text: "Beautiful interfaces with strong user experience." },
  { icon: "gauge", title: "Performance & Optimization", text: "Fast, secure and highly optimized applications." },
] as const;
