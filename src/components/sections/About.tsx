"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig, skills } from "@/lib/data";
import { useHasMounted } from "@/lib/useHasMounted";

const categories = [
  { key: "development" as const, label: "Development" },
  { key: "videography" as const, label: "Videography" },
  { key: "photography" as const, label: "Photography" },
];

export default function About() {
  const mounted = useHasMounted();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="01" title="About" />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio + photo */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-48 h-48 mx-auto md:mx-0 mb-8 rounded-lg overflow-hidden vintage-border">
              <Image
                src="/profile.png"
                alt="Nathan Bupte"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-text-secondary leading-relaxed text-lg">
              {siteConfig.bio}
            </p>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            {categories.map((cat) => (
              <div key={cat.key}>
                <h3 className="font-[family-name:var(--font-jetbrains)] text-xs text-accent uppercase tracking-widest mb-3">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === cat.key)
                    .map((skill) => (
                      <span
                        key={skill.name}
                        className="font-[family-name:var(--font-jetbrains)] text-xs text-text-secondary bg-bg-secondary border border-border px-3 py-1.5 rounded"
                      >
                        {skill.name}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
