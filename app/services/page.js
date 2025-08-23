// app/services/page.js - DEFINITIVE VERSION
import Link from 'next/link';
import styles from '../../styles/ServicesMainPage.module.css';
import '../../styles/globals.css';
import Navbar from '../../components/Navbar';

const services = [
  { icon: '🎨', title: '1. Prototype-First Design', description: 'We translate your vision into tangible results, providing interactive prototypes and detailed PDFs for your approval before any code is written.', link: '#' },
  { icon: '💻', title: '2. Enterprise-Grade Development', description: 'We build robust, industry-level websites using the technology you demand—from dynamic MERN and MEAN stacks to powerful, scalable PHP solutions.', link: '/services/website-development' },
  { icon: '🛠️', title: '3. Custom CRM & Management Systems', description: 'We develop your project from scratch, creating tailor-made CRMs and website management systems that give you complete control.', link: '#' },
  { icon: '📊', title: '4. Advanced Analytics & Tracking', description: 'We set up advanced website tracking systems, providing you with actionable insights to monitor traffic and optimize your strategy.', link: '#' },
  { icon: '📈', title: '5. Strategic Business Growth', description: 'We grow your online presence through expert SEO, SMO, and targeted digital marketing strategies designed to deliver measurable results.', link: '#' },
  { icon: '💡', title: '6. Digital Growth Partnership', description: 'Beyond development, we serve as your digital strategy partners, providing innovative business ideas and marketing roadmaps for sustained growth.', link: '#' },
];

export default function ServicesMainPage() {
  return (
    <>
      <Navbar />
      <main className={styles.servicesPage}>
        <div className={styles.header}>
          <div className={styles.container}>
            <h1 className={styles.title}>Our Digital Solutions</h1>
            <p className={styles.subtitle}>
              We provide a complete, end-to-end partnership to transform your ideas into high-performance digital assets and drive sustainable business growth.
            </p>
          </div>
        </div>

        <div className={styles.gridContainer}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <Link href={service.link} key={index} className={styles.serviceCard}>
                <div className={styles.cardIcon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <span className={styles.learnMore}>Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}