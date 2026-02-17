"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import DisciplineCard from "@/components/ui/DisciplineCard";
import { disciplines } from "@/lib/data";

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="03" title="What I Do" />

        <div className="grid md:grid-cols-3 gap-6">
          {disciplines.map((disc, i) => (
            <DisciplineCard key={disc.title} discipline={disc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
