// components/WhyChooseUs.js
import styles from '../styles/WhyChooseUs.module.css';

const features = [
  { icon: '🎯', title: 'Custom-Tailored Solutions', description: 'We don\'t use templates. Every project is a unique masterpiece built specifically for your business goals.' },
{ icon: '💰', title: 'Transparent Pricing', description: 'Clear, upfront pricing with no hidden fees. You\'ll know exactly what to expect from day one.' },
  { icon: '🤝', title: '24/7 Dedicated Support', description: 'Our partnership doesn\'t end at launch. We provide ongoing support to ensure your digital assets run flawlessly.' },
  { icon: '🏆', title: 'Proven, Tangible Results', description: 'We are data-driven. Our success is measured by your success, whether it\'s more traffic, leads, or sales.' }
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Why Choose Percepta Tech?</h2>
        <p className={styles.sectionSubtitle}>We are more than just developers; we are your digital growth partners.</p>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <span className={styles.featureIcon}>{feature.icon}</span>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}