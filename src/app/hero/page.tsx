import styles from "./hero.module.css";

const Hero = () => {
    return (
        <div className={styles.bodyFlex}>
            <div className={styles.introtext}>
                <h1>I&apos;m</h1>
                <ul className={styles.alltext}>
                    <li><span className={styles.typingText}>Web Devloper</span></li>
                    <li><span className={styles.typingText}>App Devloper</span></li>
                </ul>
            </div>
            <div className={styles.heroImage}></div>
        </div>
    );
};

export default Hero;
