import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Get In Touch</h2>
      <p>
        I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to connect, feel free to reach out!
      </p>
      <div className={styles.contactInfo}>
        <p>Email: <a href="mailto:adithyar944@gmail.com">adithyar944@gmail.com</a></p>
      </div>
      <div className={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/adithya-rameshg" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span> | </span>
        <a href="https://www.github.com/adithyar32" target="_blank" rel="noopener noreferrer">GitHub</a>
        {/* Add other relevant links */}
      </div>
      {/* Note: A functional contact form requires backend or a service like Formspree/Netlify Forms */}
    </section>
  );
}

export default Contact;
