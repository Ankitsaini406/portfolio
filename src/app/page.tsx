import Hero from "@/components/hero/page";
import Timeline from "@/app/[timeline]/page";

export default async function Home () {
  return (
    <main >
      <Hero />
      <Timeline />
    </main>
  );
}
