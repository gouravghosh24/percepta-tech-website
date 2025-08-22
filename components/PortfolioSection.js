// components/PortfolioSection.js
import PortfolioCard from './PortfolioCard';
import styles from '../styles/Portfolio.module.css';

// --- PLACEHOLDER DATA: Replace with your actual projects ---
const projects = [
  {
    id: 1,
    title: 'ZenithVista Estates Professional Brokers',
    category: 'Real Estate Brokers',
    imageUrl: '/placeholder-project-1.png', // You'll need to add images to your `public` folder
    link: '/portfolio/zenithvistaestates' // Link to a future case study page
  },
  {
    id: 2,
    title: 'Digital Forge Teh"',
    category: 'Website Development and SEO',
    imageUrl: '/placeholder-project-2.png',
    link: '/portfolio/digitalforgetech'
  },
  {
    id: 3,
    title: 'Evergreen Dental Practice',
    category: 'Local Dentists',
    imageUrl: '/placeholder-project-3.png',
    link: '/portfolio/localdentists'
  }
];
// --- END OF PLACEHOLDER DATA ---



export default function PortfolioSection() {
  return (
    <section id="work" className={styles.portfolioSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Work</h2>
        <p className={styles.sectionSubtitle}>
          We deliver results. See how we've helped other businesses succeed.
        </p>
        <div className={styles.portfolioGrid}>
          {projects.map(project => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );

}
