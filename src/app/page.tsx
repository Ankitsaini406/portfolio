import styles from "./page.module.css";
import Timeline from "./timeline/timeline";

export default function Home() {
  return (
    <main >
      <div className={styles.bodyFlex}>
      <div>
        <h1>Hi Ankit is here</h1>
        <h1>Web Devloper</h1>
        <h1>App Devloper</h1>
      </div>
      <div className={styles.heroImage}></div>
      </div>
      <Timeline />
    </main>
  );
}
