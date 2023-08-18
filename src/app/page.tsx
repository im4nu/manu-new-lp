import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen bg-black min-h-screen text-white gap-8">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
