// components/Footer.js - CORRECTED
import Link from 'next/link'; // <-- 1. IMPORT
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* ... Column 1 ... */}
          <div className={styles.footerColumn}>
            <h3 className={styles.logo}>Percepta Tech</h3>
            <p className={styles.motto}>
              “Clarity in ideas, trust in execution, innovation in every step.”
            </p>
            {/* ... Social Links ... */}
          </div>
          {/* ... Column 2 (Services) ... */}
          <div className={styles.footerColumn}>
            {/* ... */}
          </div>
          
          {/* --- 2. REPLACE <a> WITH <Link> --- */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Company</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/about" className={styles.footerLink}>About Us</Link></li>
              <li><Link href="/#work" className={styles.footerLink}>Our Work</Link></li>
              <li><Link href="/blog" className={styles.footerLink}>Blog / Insights</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>Contact Us</Link></li>
            </ul>
          </div>

          {/* ... Column 4 (Contact) is fine because mailto: and tel: are external links */}
          <div className={styles.footerColumn}>
            {/* ... */}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Percepta Tech. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="#" className={styles.footerLink}>Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className={styles.footerLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}