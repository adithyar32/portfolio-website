import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.aboutContent}>
        {/* Optional: Add an image */}
        {<img src="profile.jpg" alt="Adithya R" className={styles.profilePic} />}
        <div>
          <p>
            Hi! I'm <strong>Adithya R</strong>, a 3rd-year Computer Science Engineering student with a passion for backend systems, full-stack development, and building practical software solutions using modern web technologies.
          </p>
          <p>
            My primary tech stack includes <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>PostgreSQL</strong>. I've developed projects like <em>Motorals</em> – a bike rental application with user and admin roles – and a Spring Boot application with separate databases for authentication and CRUD operations.
          </p>
          <p>
            I'm skilled at designing RESTful APIs, managing relational databases, and creating responsive frontends. I regularly use Git and GitHub for version control and project management.
          </p>
          <p>
            I'm eager to apply my skills in impactful real-world projects, contribute to open-source, and gain more experience through internships and collaborative development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
