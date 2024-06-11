import styles from './hero.module.css'

const Hero = () => {
    return (
    <div className={styles.bodyFlex}>
      <div>
        <h1>Hi Ankit is here</h1>
        <h1 className={styles.typingText}>Web Devloper</h1>
      </div>
      <div className={styles.heroImage}></div>
      </div>
    )
}

export default Hero;