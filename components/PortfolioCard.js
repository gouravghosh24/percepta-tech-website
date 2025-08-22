// components/PortfolioCard.js
import Image from 'next/image';
import styles from '../styles/Portfolio.module.css';

export default function PortfolioCard({ project }) {
  return (
    <a href={project.link} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.cardContent}>
        <span className={styles.category}>{project.category}</span>
        <h3 className={styles.title}>{project.title}</h3>
      </div>
    </a>
  );
}