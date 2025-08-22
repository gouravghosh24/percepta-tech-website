// app/portfolio/zenithvistaestates/page.js
import Navbar from '../../../components/Navbar';
import Image from 'next/image';
import styles from '../../../styles/CaseStudy.module.css';
import '../../../styles/globals.css';

export default function localdentists() {
  return (
    <>
      <Navbar />
      <main className={styles.caseStudy}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.category}>Dental Services</span>
            <h1 className={styles.title}>Evergreen Dental Practice</h1>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/placeholder-project-3.png" // Still uses the same image file name
              alt="Zenith Vista Estates website mockup"
              width={1000}
              height={600}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Who we are</h2>
              <p>Your smile is our priority. At Evergreen Dental Practice, we provide comprehensive dental care with a focus on comfort, quality, and personalized treatment</p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Our Solution</h2>
              <p>Our dental clinic provides a full spectrum of services to meet all your oral health needs, including general dentistry with thorough cleanings, exams, and preventive care; advanced cosmetic dentistry such as teeth whitening, veneers, and smile makeovers to enhance your appearance; restorative treatments including fillings, crowns, bridges, and implants to repair and strengthen teeth; expert orthodontic care featuring braces and Invisalign for patients of all ages to achieve perfectly aligned smiles; and compassionate pediatric dentistry dedicated to gentle and effective dental care for children, ensuring their healthy dental development.</p>
            </div>
            
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>The Results</h2>
              <ul className={styles.resultsList}>
                <li>Increased patient appointment bookings by 35% within six months through Percepta Tech’s optimized online presence and targeted marketing strategies</li>
                <li>Enhanced patient engagement and satisfaction by implementing Percepta Tech’s intuitive appointment management system, reducing no-shows by 20%</li>
                <li>Successfully revamped the dental chamber’s website with Percepta Tech, resulting in a 50% boost in organic search traffic and improved local visibility</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}