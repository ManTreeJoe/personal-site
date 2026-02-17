"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/types";
import { useHasMounted } from "@/lib/useHasMounted";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export default function ExperienceCard({
  experience,
  index,
  isLast,
}: ExperienceCardProps) {
  const mounted = useHasMounted();

  return (
    <motion.div
      initial={mounted ? { opacity: 0, x: -20 } : false}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[5px] top-3 bottom-0 w-px bg-border" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-[11px] h-[11px] rounded-full border-2 border-accent bg-bg-primary" />

      <div className="vintage-border rounded-lg p-6 bg-bg-secondary">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
          <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold">
            {experience.role}
          </h3>
          <span className="font-[family-name:var(--font-jetbrains)] text-xs text-text-secondary">
            {experience.startDate} — {experience.endDate}
          </span>
        </div>
        <p className="text-accent text-sm">{experience.company}</p>
        {experience.description && (
          <p className="text-text-secondary text-sm mt-3 leading-relaxed">
            {experience.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
