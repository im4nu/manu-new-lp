import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
    </main>
  );
}
