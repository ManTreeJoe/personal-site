"use client";

import { motion } from "framer-motion";
import { Mountain, Instagram } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { hobbies } from "@/lib/data";
import { useHasMounted } from "@/lib/useHasMounted";

export default function Hobbies() {
  const mounted = useHasMounted();

  return (
    <section id="hobbies" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="05" title="Hobbies" />

        <motion.div
          initial={mounted ? { opacity: 0, y: 30 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="vintage-border rounded-lg p-8 md:p-10 bg-bg-secondary max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Mountain size={24} className="text-accent" />
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">
              {hobbies.title}
            </h3>
          </div>

          <p className="text-text-secondary leading-relaxed mb-6">
            {hobbies.description}
          </p>

          <div className="flex items-center gap-4">
            {hobbies.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-300"
                aria-label={social.name}
              >
                <Instagram size={18} />
                <span className="font-[family-name:var(--font-jetbrains)] text-sm">
                  @rockman_joe
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
