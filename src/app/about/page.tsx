import styles from './page.module.css';

export default function About() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>About Me</h1>

      <section className={styles.section}>
        <h2>My Journey</h2>
        <p>
          I started my development journey with a deep curiosity for creating practical solutions to everyday challenges. 
          Over time, I've worked on projects that gave me hands-on experience with technologies like <strong>Node.js</strong>, 
          <strong>React</strong>, <strong>MongoDB</strong>, and more. These experiences shaped me into a problem-solver 
          who enjoys building applications that make tasks easier and more efficient.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Core Values</h2>
        <ul className={styles.valuesList}>
          <li>
            <strong>User First:</strong> I always prioritize creating applications that are simple and intuitive for users.
          </li>
          <li>
            <strong>Continuous Growth:</strong> I'm committed to learning and improving every day to stay ahead in this fast-evolving field.
          </li>
          <li>
            <strong>Collaboration:</strong> I believe teamwork drives innovation, and I love working with others to bring ideas to life.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Hobbies & Interests</h2>
        <p>
          Outside of coding, I enjoy exploring creativity through designing, gaming, and dancing. 
          These activities not only help me recharge but also inspire me to bring fresh perspectives to my work.
        </p>
      </section>

      <section className={styles.section}>
        <h2>My Goals</h2>
        <p>
          I aim to keep growing as a developer by learning new technologies, contributing to impactful projects, 
          and helping others through mentorship and knowledge-sharing.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Notable Achievements</h2>
        <ul className={styles.achievementsList}>
          <li>Built an <strong>Inventory Management System</strong> that streamlined operations and improved productivity.</li>
          <li>Integrated <strong>RFID technology</strong> into warehouse systems for efficient material tracking.</li>
          <li>Deployed secure and scalable applications on platforms like <strong>AWS</strong> and <strong>cPanel</strong>.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Why Work With Me</h2>
        <p>
          I combine technical expertise with a creative mindset to deliver solutions that are both functional and innovative. 
          Whether it's building a dynamic dashboard, implementing secure systems, or simplifying workflows, 
          I am dedicated to delivering results that exceed expectations.
        </p>
      </section>
    </main>
  );
}
