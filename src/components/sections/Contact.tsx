"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialLinks from "@/components/ui/SocialLinks";
import { siteConfig } from "@/lib/data";
import { useHasMounted } from "@/lib/useHasMounted";

export default function Contact() {
  const mounted = useHasMounted();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="06" title="Contact" />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: CTA + socials */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-4">
              Let&apos;s work together
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              Have a project in mind or just want to connect? I&apos;m always
              open to new opportunities and collaborations.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors mb-8"
            >
              <Mail size={18} />
              <span className="font-[family-name:var(--font-jetbrains)] text-sm">
                {siteConfig.email}
              </span>
            </a>

            <div className="mt-4">
              <SocialLinks size={20} />
            </div>
          </motion.div>

          {/* Right: Contact form (mailto-based) */}
          <motion.form
            initial={mounted ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            action={`mailto:${siteConfig.email}`}
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block font-[family-name:var(--font-jetbrains)] text-xs text-text-secondary uppercase tracking-wider mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-text-secondary/50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-[family-name:var(--font-jetbrains)] text-xs text-text-secondary uppercase tracking-wider mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-text-secondary/50"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-[family-name:var(--font-jetbrains)] text-xs text-text-secondary uppercase tracking-wider mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-text-secondary/50"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-[family-name:var(--font-jetbrains)] text-sm px-6 py-3 rounded-lg transition-colors"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
