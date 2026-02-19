import Hero from "@/components/hero/hero";
import LazySections from "@/components/LazySection";

export default async function Home() {

  return (
    <>
      <Hero />
      <LazySections />
    </>
  );
}