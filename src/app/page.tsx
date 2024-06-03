import Image from "next/image";
import styles from "./page.module.css";
import Introduction from "@/components/intro/Intro";

export default function Home() {
  return (
    <main className={styles.bodyFlex}>
      {/* <Introduction> */}
        <h1>Welcome</h1>
      {/* </Introduction> */}
    </main>
  );
}
