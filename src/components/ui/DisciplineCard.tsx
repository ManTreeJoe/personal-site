"use client";

import { motion } from "framer-motion";
import { Code, Video, Camera } from "lucide-react";
import type { Discipline } from "@/types";
import { useHasMounted } from "@/lib/useHasMounted";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  code: Code,
  video: Video,
  camera: Camera,
};

interface DisciplineCardProps {
  discipline: Discipline;
  index: number;
}

export default function DisciplineCard({
  discipline,
  index,
}: DisciplineCardProps) {
  const Icon = iconMap[discipline.icon];
  const mounted = useHasMounted();

  return (
    <motion.div
      initial={mounted ? { opacity: 0, y: 30 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="vintage-border rounded-lg p-8 bg-bg-secondary hover:border-accent/30 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
        {Icon && <Icon size={24} className="text-accent" />}
      </div>

      <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold mb-3">
        {discipline.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-6">
        {discipline.description}
      </p>

      <ul className="space-y-2">
        {discipline.capabilities.map((cap) => (
          <li
            key={cap}
            className="flex items-center gap-2 text-sm text-text-secondary"
          >
            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
            {cap}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
