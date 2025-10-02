import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/Contact";
import Background from "@/components/background";
import Wiimenu from "@/components/wiimenu";
import Wiifooter from "@/components/Wiifooter";
export default function Home() {
  return (
    <>
      <main
        className="flex flex-col justify-center h-[100%]"
        style={{
          cursor: "url(/wiicursor-60.png), auto",
        }}
      >
        <Wiimenu />
      </main>
      <footer>
        <Wiifooter />
      </footer>
    </>
  );
}
