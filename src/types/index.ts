export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: "development" | "videography" | "photography";
}

export interface Experience {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  category: "dev" | "video" | "photo";
  status: "live" | "coming-soon";
  url?: string;
  tags: string[];
}

export interface Discipline {
  title: string;
  description: string;
  icon: string;
  capabilities: string[];
}
