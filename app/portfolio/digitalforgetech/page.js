// app/portfolio/zenithvistaestates/page.js
import Navbar from '../../../components/Navbar';
import Image from 'next/image';
import styles from '../../../styles/CaseStudy.module.css';
import '../../../styles/globals.css';

export default function digitalforgetech() {
  return (
    <>
      <Navbar />
      <main className={styles.caseStudy}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.category}>Website Development & Digital marketing</span>
            <h1 className={styles.title}>Digital Forge Tech</h1>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/placeholder-project-2.png" // Still uses the same image file name
              alt="Digital Forge Tech"
              width={1000}
              height={600}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Who we are</h2>
              <p>We partner with you to drive business growth.</p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Our Solution</h2>
              <p>At Digital Forge Tech, we specialize in designing and developing cutting-edge websites tailored to your business goals. Our expert team combines creativity, technology, and industry best practices to deliver responsive, user-friendly, and scalable web solutions.</p>
            </div>
            
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>The Results</h2>
              <ul className={styles.resultsList}>
                <li>A **40% increase in qualified leads** Delivered an intuitive website and boosted brand engagement on social media, enabling significant digital growth for the client.</li>
                <li>Successfully redesigned the website and revamped digital marketing, doubling site traffic and significantly increasing online sales</li>
                <li>Provided a responsive website ahead of schedule and optimized marketing campaigns to achieve a 40% lead increase in three months..</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}