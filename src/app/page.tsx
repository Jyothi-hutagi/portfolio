import About from '@/app/about/page';
import Contact from '@/app/contact/page';
import Home from '@/app/home/page';
import Projects from '@/app/projects/page';
import styles from './page.module.css';

export default function MainPage() {
  return (
    <main className={styles.mainContainer}>
      <section id="home" className={styles.section}>
        <Home />
      </section>
      
      <section id="about" className={styles.section}>
        <About />
      </section>
      
      <section id="projects" className={styles.section}>
        <Projects />
      </section>
      
      <section id="contact" className={styles.section}>
        <Contact />
      </section>
    </main>
  );
}
