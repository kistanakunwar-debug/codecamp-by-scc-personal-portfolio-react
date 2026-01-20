export type Project = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export const defaultProjects: Project[] = [
  {
    title: "Portfolio Remix",
    description: "A clean single-page portfolio with a surprise theme unlock.",
    link: "https://example.com",
    tags: ["React", "CSS"],
  },
  {
    title: "Study Buddy",
    description: "A tiny productivity app for organizing study sessions.",
    link: "https://example.com",
    tags: ["TypeScript", "Vite"],
  },
  {
    title: "Pixel Planner",
    description: "A pixel-art inspired task board for creative teams.",
    link: "https://example.com",
    tags: ["Design", "UI"],
  },
  {
    title: "CodeCamp",
    description: "Code Camp is an intensive program that teaches coding skills through hands-on practice and real-world projects.",
    link: "https://www.google.com/",
    tags: ["React", "CSS"],
  }
];

export const projectsData: Project[] = [
  ...defaultProjects,
];
