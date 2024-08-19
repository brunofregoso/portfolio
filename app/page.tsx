import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
