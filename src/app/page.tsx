import Hero from "@/components/hero/hero";
import AboutSection from "@/app/about/AboutSection";
import ProjectSection from "@/app/projects/ProjectSection";
import TimelineSection from "@/app/timeline/TimelineSection";

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectSection />
      <TimelineSection />
    </>
  );
}
