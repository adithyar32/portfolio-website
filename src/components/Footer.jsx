import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className={styles.footer}>
      <p>© {currentYear} Adithya R. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
