"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="02" title="Experience" />

        <div className="max-w-2xl">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={`${exp.company}-${exp.role}`}
              experience={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
