// components/Testimonials.js
import styles from '../styles/Testimonials.module.css';

const reviews = [
    { name: 'John Doe, CEO of Innovate Inc.', quote: '"Working with Percepta Tech was a game-changer. Their team delivered a stunning website that tripled our online leads in just two months. True professionals!"' },
    { name: 'Jane Smith, Founder of Gourmet Goods', quote: '"The clarity and execution are unmatched. They understood our vision perfectly and brought it to life with a platform that is both beautiful and functional."' }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
        <div className={styles.testimonialsGrid}>
          {reviews.map((review, index) => (
            <blockquote key={index} className={styles.testimonialCard}>
              <p className={styles.quote}>{review.quote}</p>
              <cite className={styles.author}>{review.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}