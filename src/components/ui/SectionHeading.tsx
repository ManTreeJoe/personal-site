"use client";

import { motion } from "framer-motion";
import { useHasMounted } from "@/lib/useHasMounted";

interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  const mounted = useHasMounted();

  return (
    <motion.div
      initial={mounted ? { opacity: 0, y: 20 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <span className="font-[family-name:var(--font-jetbrains)] text-xs text-accent tracking-widest uppercase">
        {number}
      </span>
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mt-2">
        {title}
      </h2>
      <div className="w-16 h-0.5 bg-accent mt-4" />
    </motion.div>
  );
}
