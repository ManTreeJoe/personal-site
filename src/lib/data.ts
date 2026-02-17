import type { SocialLink, Skill, Experience, Project, Discipline } from "@/types";

export const siteConfig = {
  name: "Nathan Bupte",
  tagline: "Developer / Videographer / Photographer",
  email: "nathanbupte@gmail.com",
  bio: `I'm a full-stack developer and creative with a B.S. in Computer Science from Cal State Fullerton. I blend technical expertise with a passion for visual storytelling — building polished web experiences by day and crafting compelling video and photo work on the side. I thrive at the intersection of code and creativity.`,
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/ManTreeJoe",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nathan-bupte-profile/",
    icon: "linkedin",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCQGMA178FjAIsPYZ2BZeHQw",
    icon: "youtube",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/treeman_joe/",
    icon: "instagram",
  },
  {
    name: "X",
    url: "https://x.com/Treeman_Joe",
    icon: "x",
  },
];

export const skills: Skill[] = [
  // Development
  { name: "TypeScript", category: "development" },
  { name: "React / Next.js", category: "development" },
  { name: "Node.js", category: "development" },
  { name: "Python", category: "development" },
  { name: "PostgreSQL", category: "development" },
  { name: "Tailwind CSS", category: "development" },
  { name: "Git", category: "development" },
  { name: "REST APIs", category: "development" },
  // Videography
  { name: "Premiere Pro", category: "videography" },
  { name: "After Effects", category: "videography" },
  { name: "DaVinci Resolve", category: "videography" },
  { name: "Cinematography", category: "videography" },
  { name: "Color Grading", category: "videography" },
  { name: "Sound Design", category: "videography" },
  // Photography
  { name: "Lightroom", category: "photography" },
  { name: "Photoshop", category: "photography" },
  { name: "Portrait", category: "photography" },
  { name: "Event Coverage", category: "photography" },
  { name: "Photo Editing", category: "photography" },
  { name: "Composition", category: "photography" },
];

export const experiences: Experience[] = [
  {
    role: "Services Engineer",
    company: "SwiftComply",
    startDate: "Apr 2025",
    endDate: "Present",
  },
  {
    role: "Form Developer",
    company: "CloudCompli",
    startDate: "Jan 2025",
    endDate: "Present",
  },
  {
    role: "Software Engineer Intern",
    company: "CloudCompli",
    startDate: "Aug 2024",
    endDate: "Jan 2025",
  },
  {
    role: "Web Developer",
    company: "Fast Tech Support",
    startDate: "Nov 2023",
    endDate: "Aug 2024",
  },
];

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "This site — a retro-modern portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    category: "dev",
    status: "live",
    url: "#",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Creative Reel",
    description:
      "A cinematic showreel compiling my best videography and motion graphics work.",
    category: "video",
    status: "coming-soon",
    tags: ["Premiere Pro", "After Effects"],
  },
  {
    title: "Photo Series",
    description:
      "A curated collection of portrait and street photography exploring light and texture.",
    category: "photo",
    status: "coming-soon",
    tags: ["Lightroom", "Portrait"],
  },
  {
    title: "SaaS Dashboard",
    description:
      "A full-stack web application with real-time data visualization and user management.",
    category: "dev",
    status: "coming-soon",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Short Film",
    description:
      "A narrative short exploring themes of identity and connection through visual storytelling.",
    category: "video",
    status: "coming-soon",
    tags: ["Cinematography", "Color Grading"],
  },
  {
    title: "Event Gallery",
    description:
      "Professional event coverage showcasing candid moments and curated highlights.",
    category: "photo",
    status: "coming-soon",
    tags: ["Event", "Photoshop"],
  },
];

export const disciplines: Discipline[] = [
  {
    title: "Development",
    description:
      "Building fast, accessible, and visually polished web experiences from concept to deployment.",
    icon: "code",
    capabilities: [
      "Full-Stack Web Development",
      "React & Next.js Applications",
      "API Design & Integration",
      "Database Architecture",
    ],
  },
  {
    title: "Videography",
    description:
      "Crafting compelling visual narratives through cinematic shooting, editing, and post-production.",
    icon: "video",
    capabilities: [
      "Video Production & Editing",
      "Motion Graphics",
      "Color Grading",
      "Sound Design",
    ],
  },
  {
    title: "Photography",
    description:
      "Capturing authentic moments and creating striking visual compositions across genres.",
    icon: "camera",
    capabilities: [
      "Portrait Photography",
      "Event Coverage",
      "Photo Editing & Retouching",
      "Creative Direction",
    ],
  },
];

export const hobbies = {
  title: "Rock Climbing",
  description:
    "When I'm not behind a screen or camera, you'll find me on the wall. Rock climbing keeps me grounded (ironically) — it's problem-solving with your whole body. Bouldering, sport climbing, outdoor sends — I'm always chasing the next project.",
  socials: [
    {
      name: "Climbing Instagram",
      url: "https://www.instagram.com/rockman_joe/",
      icon: "instagram",
    },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Projects", href: "#projects" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Contact", href: "#contact" },
];
