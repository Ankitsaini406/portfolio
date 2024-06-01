import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.prallex}>
      <div className={styles.heroImagebox}>
        <h1 className={styles.heroText}>This is test</h1>
        <Image className={styles.heroImage}
          src={
            "https://images.unsplash.com/photo-1515338580809-319aaaae76fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          fill
          priority
          sizes="(max-width: 768px) 100vw 700px"
          alt={"Hero Image"} style={{backgroundAttachment: 'fixed', backgroundPosition:'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
        ></Image>
      </div>
      <div className={styles.divColor}></div>
      <div className={styles.divColor}></div>
      <div className={styles.divColor}></div>
    </main>
  );
}
