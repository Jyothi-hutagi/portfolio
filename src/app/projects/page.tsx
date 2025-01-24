'use client';

import styles from './page.module.css';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    //image: "/projects/ecommerce.png" // Add your project image
  },
  {
    title: "Task Management App",
    description: "Real-time task management application with team collaboration features",
    tags: ["Next.js", "TypeScript", "Firebase"],
   // image: "/projects/task-app.png"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with smooth animations and responsive design",
    tags: ["React", "CSS", "Animation"],
   // image: "/projects/portfolio.png"
  }
];

export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.title}>My Projects</h1>
      <p className={styles.subtitle}>
        Here are some of my recent projects that showcase my skills and experience
      </p>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectImage}>
              {/* <img src={p alt={project.title} /> */}
              <div className={styles.projectOverlay}>
                <button className={styles.viewButton}>View Project</button>
              </div>
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
