// components/AboutSection.js
import styles from '../styles/AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          
          {/* --- THIS IS THE UPDATED PART --- */}
          <div className={styles.videoContainer}>
            <video 
              src="/about-us-video.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className={styles.video}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className={styles.textContainer}>
            <h2 className={styles.sectionTitle}>Visionary, Insightful, Intelligent.</h2>
            <p className={styles.sectionSubtitle}>
              Percepta Tech was founded on a simple principle: to bring clarity to a complex digital world. We believe that the best digital products are born from a deep understanding of our clients' vision and an unwavering commitment to execution.
            </p>
            <p className={styles.bodyText}>
              Our journey began with a passion for building technology that is not only powerful but also intuitive. We are more than just developers; we are your strategic partners, dedicated to turning your ideas into tangible, high-performance digital assets that drive real business growth.
            </p>
            <a href="/about" className={styles.learnMoreButton}>Learn More About Our Story</a>
          </div>
        </div>
      </div>
    </section>
  );
}