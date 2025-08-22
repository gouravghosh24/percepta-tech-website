// components/HeroSection.js - FINAL SIMPLE VIDEO VERSION
import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>

      {/* The Video Background */}
      <video
        src="/hero-background.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={styles.videoBackground}
      />
      
      
    </section>
  );
}