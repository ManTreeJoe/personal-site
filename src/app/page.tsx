import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import WhatIDo from "@/components/sections/WhatIDo";
import Projects from "@/components/sections/Projects";
import Hobbies from "@/components/sections/Hobbies";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <WhatIDo />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Hobbies />
      <div className="section-divider" />
      <Contact />
    </>
  );
}
