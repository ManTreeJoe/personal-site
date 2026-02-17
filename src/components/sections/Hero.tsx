"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SocialLinks from "@/components/ui/SocialLinks";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  const parts = siteConfig.tagline.split("/");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center"
      >
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6">
          {siteConfig.name}
        </h1>

        <p className="font-[family-name:var(--font-jetbrains)] text-lg sm:text-xl text-text-secondary mb-10">
          {parts.map((part, i) => (
            <span key={i}>
              {part.trim()}
              {i < parts.length - 1 && (
                <span className="text-accent mx-2">/</span>
              )}
            </span>
          ))}
        </p>

        <div className="flex justify-center mb-16">
          <SocialLinks size={22} />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 text-text-secondary hover:text-accent transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}
