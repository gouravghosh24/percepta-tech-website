// components/ProcessSection.js - DEFINITIVE BOX DESIGN VERSION
import styles from '../styles/Process.module.css';

const steps = [
  { num: '01', title: 'Prototype-First Design', description: 'We start by understanding your business, goals, and audience to create a tailored strategy for success.' },
  { num: '02', title: 'Design & Prototyping', description: 'Our team crafts a beautiful, intuitive user interface design and interactive prototype for your approval.' },
  { num: '03', title: 'Development', description: 'We bring the designs to life using clean, efficient, and modern code on a scalable architecture.' },
  { num: '04', title: 'Launch & SEO', description: 'We handle a smooth deployment, perform final testing, and implement foundational SEO to start strong.' }
];

export default function ProcessSection() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Comprehensive Approach</h2>
        <p className={styles.sectionSubtitle}>
          From initial concept to long-term growth, we provide a complete digital partnership.
        </p>
        
        {/* The class name here is now 'processGrid' instead of 'timeline' */}
        <div className={styles.processGrid}>
          {steps.map(step => (
            // The class name here is now 'stepCard'
            <div key={step.num} className={styles.stepCard}>
              <span className={styles.stepNumber}>{step.num}</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}