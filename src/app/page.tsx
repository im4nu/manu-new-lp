import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { ArrowUp2 } from "iconsax-react";
import Image from "next/image";

import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen bg-black min-h-screen text-white gap-8">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
      <a
        href=""
        className="flex fixed bottom-4 right-4 bg-white rounded-full text-main p-3 shadow-neon"
      >
        <ArrowUp2 size={24} />
      </a>
    </main>
  );
}
