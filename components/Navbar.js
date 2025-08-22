// components/Navbar.js
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${styles.container}`}>
        {/* The logo link should always point to the homepage */}
        <a href="/" className={styles.logo}>Percepta Tech</a>
        
        <ul className={styles.navLinks}>
          {/* These links now correctly point back to the homepage sections */}
          <li><a href="/#services">Services</a></li>
          <li><a href="/#work">Our Work</a></li>
          
          {/* These links correctly point to their dedicated pages */}
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
        
        {/* This will point to our future contact page */}
        <a href="/contact" className={styles.contactButton}>Contact Us</a>
      </nav>
    </header>
  );
}