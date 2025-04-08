import Hero from "@/components/hero/page";
import Timeline from "@/app/[timeline]/page";
import About from "./about/page";
import Projects from "./projects/page";

export default async function Home() {
  return (
    <main>
      <Hero />
      <Timeline />
      <Projects />
      <About />
    </main>
  );
}
