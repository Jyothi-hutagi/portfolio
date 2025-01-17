import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles['home-container']}>
      <div className={styles.banner}>
        <span className={styles['banner-emoji']}>✨</span>
        Looking Forward to New Ventures
      </div>

      <h1 className={styles.title}>
        Hey, I'M Jyothi Hutagi
        <span className={styles['highlight-container']}>
          <span className={styles.highlight}></span>
        </span>
      </h1>

      <p className={styles.description}>
        Transforming ideas into reality with modern web technologies. <br/>
        Whether it's crafting user-friendly applications or building secure, scalable systems, I bring your vision to life with creativity and precision.
      </p>

      <Link href="/contact" className={styles['cta-button']}>
        Let's Build Something Amazing Together!
      </Link>
    </main>
  );
}
