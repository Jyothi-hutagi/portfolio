import styles from './page.module.css';

export default function About() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>ABOUT ME</h1>
      <p className={styles.subtitle}>
        Here you will find more information about me, what I do, and my current skills mostly in terms
        of programming and technology
      </p>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Get to know me!</h2>
          <p>
            I started my development journey with a deep curiosity for creating practical solutions to everyday challenges. 
            Over time, I've worked on projects that gave me hands-on experience with technologies like <strong>Node.js</strong>, {' '}
            <strong>React</strong>, <strong>MongoDB</strong>, and more.
          </p>
          <p>
            I aim to keep growing as a developer by learning new technologies, contributing to impactful projects, 
            and helping others through mentorship and knowledge-sharing.
          </p>
          <p>
            I combine technical expertise with a creative mindset to deliver solutions that are both functional and innovative. 
            Whether it's building a dynamic dashboard, implementing secure systems, or simplifying workflows, 
            I am dedicated to delivering results that exceed expectations.
          </p>
        </section>

        <section className={styles.section}>
          <h2>My Skills</h2>
          <div className={styles.skillsGrid}>
            <span className={styles.skillTag}>HTML</span>
            <span className={styles.skillTag}>CSS</span>
            <span className={styles.skillTag}>JavaScript</span>
            <span className={styles.skillTag}>React</span>
            <span className={styles.skillTag}>WordPress</span>
            <span className={styles.skillTag}>PHP</span>
            <span className={styles.skillTag}>SASS</span>
            <span className={styles.skillTag}>GIT</span>
            <span className={styles.skillTag}>Github</span>
            <span className={styles.skillTag}>Responsive Design</span>
            <span className={styles.skillTag}>SEO</span>
            <span className={styles.skillTag}>Terminal</span>
          </div>
        </section>
      </div>
    </main>
  );
}
