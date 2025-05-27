import Hero from "@/components/hero/hero";
import Timeline from "./timeline/page";
import Projects from "./projects/page";
import About from "./about/page";


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
