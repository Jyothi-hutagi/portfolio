import styles from './page.module.css'

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Jyothi Hutagi
        </h1>
        <h2 className={styles.subtitle}>
          Fullstack Web Developer
        </h2>
        <p className={styles.description}>
          Welcome to my portfolio! I specialize in building modern web applications
          using cutting-edge technologies and best practices.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.primaryButton}>
            View Projects
          </button>
          <button className={styles.secondaryButton}>
            Contact Me
          </button>
        </div>
      </div>
    </main>
  )
}
