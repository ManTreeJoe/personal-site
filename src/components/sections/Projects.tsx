"use client";

import { motion } from "framer-motion";
import StatusBadge from "@/components/ui/StatusBadge";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";
import { useHasMounted } from "@/lib/useHasMounted";

export default function Projects() {
  const mounted = useHasMounted();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-12">
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-[family-name:var(--font-jetbrains)] text-xs text-accent tracking-widest uppercase">
              04
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mt-2">
              Projects
            </h2>
            <div className="w-16 h-0.5 bg-accent mt-4" />
          </motion.div>
          <motion.div
            initial={mounted ? { opacity: 0 } : false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="sm:mt-4"
          >
            <StatusBadge />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
