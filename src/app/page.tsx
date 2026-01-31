import Hero from "@/components/hero/hero";
import About from "./about/page";
import Projects from "./projects/page";
import Timeline from "./timeline/page";

export default async function Home() {

  return (
    <>
      <Hero />
      <div className="space-y-20 md:space-y-40">
        <About />
        <Projects />
        <Timeline />
      </div>
    </>
  );
}