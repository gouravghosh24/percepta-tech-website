// app/portfolio/zenithvistaestates/page.js - DEFINITIVE PATH FIX
import Navbar from '../../../components/Navbar';
import Image from 'next/image';
import styles from '../../../styles/CaseStudy.module.css';
import '../../../styles/globals.css';

export default function ZenithVistaEstatesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.caseStudy}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.category}>Website Development & Real Estate</span>
            <h1 className={styles.title}>Zenith Vista Estates Luxury Platform</h1>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/placeholder-project-1.jpg"
              alt="Zenith Vista Estates website mockup"
              width={1000}
              height={600}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
          <div className={styles.contentGrid}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>The Challenge</h2>
              <p>Zenith Vista Estates, a premier luxury real estate agency, was hampered by an outdated website that failed to showcase their high-value properties. The user experience was poor, and listings were difficult to search, leading to low engagement from affluent clients.</p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Our Solution</h2>
              <p>We designed and developed a bespoke, visually-driven platform on Next.js. The site features stunning, full-screen property galleries, immersive virtual tours, and an advanced search functionality with interactive maps. We built a custom backend that allows agents to easily manage listings in real-time.</p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>The Results</h2>
              <ul className={styles.resultsList}>
                <li>A **40% increase in qualified leads** submitted through the platform in the first quarter.</li>
                <li>Average user session duration **increased by 50%** due to the engaging virtual tours.</li>
                <li>Achieved a **top 3 Google ranking** for the target keyword "luxury homes in [Your City]".</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}