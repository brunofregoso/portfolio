import Image from "next/image";
import Intro from "@/components/intro";
import About from "@/components/about";
export default function Home() {
  return (
    <main className="flex flex-col">
      <Intro />
      <About />
    </main>
  );
}
