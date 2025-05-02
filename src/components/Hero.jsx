import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1>Welcome to My Portfolio</h1>
      <p>I'm Adithya R, a passionate full-stack developer specializing in backend systems, RESTful APIs, and building scalable web applications using Java, Spring Boot, React, and more.</p>
      {/* Optional Button: */}
      {/* <a href="#projects" className={styles.ctaButton}>View My Work</a> */}
    </section>
  );
}

export default Hero;
