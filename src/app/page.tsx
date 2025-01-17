import AboutPage from '@/app/about/page';
//import ProjectsPage from '@/app/projects/page';
import ContactPage from '@/app/contact/page';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import HomePage from '@/app/home/page';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
   
      
      <main className={styles.main}>
        {/* Each section wraps your existing page components */}
        <section id="home" className={styles.section}>
          <HomePage />
        </section>

        <section id="about" className={`${styles.section} ${styles.altBg}`}>
          <AboutPage />
        </section>

        {/* <section id="projects" className={styles.section}>
          <ProjectsPage />
        </section> */}

        <section id="contact" className={`${styles.section} ${styles.altBg}`}>
          <ContactPage />
        </section>
      </main>

     
    </>
  );
}
