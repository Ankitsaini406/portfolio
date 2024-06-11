import Hero from "./hero/page";
import styles from "./page.module.css";
import Timeline from "./timeline/timeline";

export default function Home() {
  return (
    <main >
      <Hero />
      <Timeline />
    </main>
  );
}
