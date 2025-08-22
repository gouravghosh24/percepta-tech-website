// components/Navbar.js - CORRECTED
import Link from 'next/link'; // <-- 1. IMPORT
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${styles.container}`}>
        {/* --- 2. REPLACE <a> WITH <Link> --- */}
        <Link href="/" className={styles.logo}>Percepta Tech</Link>
        <ul className={styles.navLinks}>
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/#work">Our Work</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
        <Link href="/contact" className={styles.contactButton}>Contact Us</Link>
      </nav>
    </header>
  );
}