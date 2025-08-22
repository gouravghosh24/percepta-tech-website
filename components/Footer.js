// components/Footer.js
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>

          {/* Column 1: Brand & Motto */}
          <div className={styles.footerColumn}>
            <h3 className={styles.logo}>Percepta Tech</h3>
            <p className={styles.motto}>
              “Clarity in ideas, trust in execution, innovation in every step.”
            </p>
            <div className={styles.socialLinks}>
              {/* Add your actual social media links here */}
              <a href="#" className={styles.socialIcon}>LinkedIn</a>
              <a href="#" className={styles.socialIcon}>Twitter</a>
              <a href="#" className={styles.socialIcon}>Instagram</a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Our Services</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#" className={styles.footerLink}>Prototype-First Design</a></li>
              <li><a href="#" className={styles.footerLink}>Enterprise-Grade Development</a></li>
              <li><a href="#" className={styles.footerLink}>Custom CRM & CMS Solutions</a></li>
              <li><a href="#" className={styles.footerLink}>Data-Driven SEO & SMO</a></li>
              <li><a href="#" className={styles.footerLink}>Advanced Analytics & Tracking</a></li>
              <li><a href="#" className={styles.footerLink}>Digital Growth Partnership</a></li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Company</h4>
            <ul className={styles.footerLinks}>
              <li><a href="/about" className={styles.footerLink}>About Us</a></li>
              <li><a href="/#work" className={styles.footerLink}>Our Work</a></li>
              <li><a href="/blog" className={styles.footerLink}>Blog / Insights</a></li>
              <li><a href="/contact" className={styles.footerLink}>Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Contact Us</h4>
            <address className={styles.address}>
              8/80 B, NSC BOSE ROAD<br />
              KOKATA, WEST BENGAL, IN 700092<br />
              <a href="mailto:contact@perceptatech.com" className={styles.footerLink}>askus@perceptatech.com</a><br />
              <a href="tel:+1234567890" className={styles.footerLink}>(+91) 7003817857</a>
            </address>
          </div>

        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Percepta Tech. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.footerLink}>Privacy Policy</a>
            <span>|</span>
            <a href="#" className={styles.footerLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}