import Image from "next/image";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
export default function Home() {
  return (
    <main className="flex flex-col">
      <Intro />
      <About />
      <Projects />
      <Experience />
    </main>
  );
}
