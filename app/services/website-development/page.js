// app/services/website-development/page.js - DEFINITIVE PATH FIX
import Navbar from '../../../components/Navbar';
import styles from '../../../styles/ServicePage.module.css';
import '../../../styles/globals.css';

export default function WebDevServicePage() {
  return (
    <>
      <Navbar />
      <main className={styles.servicePage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Custom Website Development</h1>
          <p className={styles.subtitle}>
            We build lightning-fast, visually stunning, and SEO-ready websites that act as your 24/7 sales engine.
          </p>
          <div className={styles.content}>
            <h2>Our Approach</h2>
            <p>
              A great website is more than just an online brochure. We focus on the intersection of user experience, performance, and business goals. Our process involves deep dives into your brand identity and target audience to craft a digital presence that not only looks good but also converts visitors into customers.
            </p>
            <h2>Key Features & Benefits</h2>
            <ul>
              <li><strong>Responsive Design:</strong> Perfect viewing experience on all devices.</li>
              <li><strong>Performance Optimized:</strong> Fast load times for better UX and SEO.</li>
              <li><strong>SEO-Friendly Architecture:</strong> Built to be loved by Google.</li>
              <li><strong>Content Management System (CMS):</strong> Easily update your content.</li>
              <li><strong>Scalable & Secure:</strong> A robust foundation for growth.</li>
            </ul>
            <a href="/contact" className={styles.ctaButton}>Plan Your Website Project</a>
          </div>
        </div>
      </main>
    </>
  );
}