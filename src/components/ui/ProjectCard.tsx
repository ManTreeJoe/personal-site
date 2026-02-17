"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { useHasMounted } from "@/lib/useHasMounted";

const categoryColors: Record<string, string> = {
  dev: "text-accent",
  video: "text-blue-400",
  photo: "text-emerald-400",
};

const categoryLabels: Record<string, string> = {
  dev: "Development",
  video: "Videography",
  photo: "Photography",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isComingSoon = project.status === "coming-soon";
  const mounted = useHasMounted();

  return (
    <motion.div
      initial={mounted ? { opacity: 0, y: 30 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`vintage-border rounded-lg p-6 bg-bg-secondary transition-all duration-300 ${
        isComingSoon
          ? "opacity-70 hover:opacity-100"
          : "hover:border-accent/30"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <span
          className={`font-[family-name:var(--font-jetbrains)] text-xs uppercase tracking-wider ${categoryColors[project.category]}`}
        >
          {categoryLabels[project.category]}
        </span>
        {isComingSoon ? (
          <span className="font-[family-name:var(--font-jetbrains)] text-xs text-text-secondary border border-border px-2 py-0.5 rounded">
            Coming Soon
          </span>
        ) : project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label={`View ${project.title}`}
          >
            <ExternalLink size={16} />
          </a>
        ) : null}
      </div>

      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold mb-2">
        {project.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-[family-name:var(--font-jetbrains)] text-xs text-text-secondary bg-bg-tertiary px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
