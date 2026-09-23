import Hero from "@/components/hero/hero";
import AboutSection from "@/app/about/AboutSection";
import ProjectSection from "@/app/projects/ProjectSection";
import TimelineSection from "@/app/timeline/TimelineSection";
import FAQSection from "@/components/faq/FAQSection";
import { WebSiteSchema, PersonSchema } from "@/components/seo/JsonLd";

export default async function Home() {
  return (
    <>
      {/* Global Structured Data for Google AI Overviews & Citations */}
      <WebSiteSchema />
      <PersonSchema />

      <main>
        <Hero />
        <AboutSection />
        <ProjectSection />
        <TimelineSection />
        <FAQSection />
      </main>
    </>
  );
}
