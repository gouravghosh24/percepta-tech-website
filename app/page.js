// app/page.js - DEFINITIVE VERSION WITH "LEARN MORE" BUTTONS

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import ProcessSection from '../components/ProcessSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

import '../styles/globals.css';
import styles from '../styles/Home.module.css';

// --- Data for Web Development Services ---
const webDevServices = [
  { icon: '💻', title: 'Website Design & Development', description: 'We craft high-performance, visually stunning websites tailored to your brand, serving as your 24/7 sales engine.', link: '/services/website-development' },
  { icon: '📱', title: 'Mobile App Development', description: 'We design and develop intuitive, engaging mobile experiences for both iOS and Android platforms to connect you with your users anywhere.', link: '#' },
  { icon: '🛒', title: 'CMS & E-commerce Solutions', description: 'From product catalogs to secure checkouts, we build powerful online stores that convert visitors into loyal customers.', link: '#' },
];

// --- Data for Digital Marketing Services ---
const marketingServices = [
  { icon: '📈', title: 'Search Engine Optimization (SEO)', description: 'We boost your visibility on Google and attract high-intent customers through foundational and advanced SEO strategies.', link: '#' },
  { icon: '📢', title: 'Social Media & PPC Ads', description: 'We manage targeted ad campaigns on platforms like Google and Meta to drive immediate traffic and generate qualified leads.', link: '#' },
  { icon: '✍️', title: 'Branding & Content Marketing', description: 'We build your brand\'s authority and connect with your audience through compelling content that educates and converts.', link: '#' },
];


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />

        <section id="services" className={styles.servicesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Core Services</h2>
            <p className={styles.sectionSubtitle}>We offer a complete suite of services to build your presence and grow your brand online.</p>

            {/* Category 1 */}
            <div className={styles.serviceCategory}>
              <h3 className={styles.categoryTitle}>Web & App Development</h3>
              <div className={styles.servicesList}>
                {webDevServices.map((service, index) => (
                  <div key={index} className={styles.serviceRow}>
                    <div className={styles.iconContainer}>
                      <span className={styles.serviceIcon}>{service.icon}</span>
                    </div>
                    <div className={styles.textContainer}>
                      <h4 className={styles.serviceTitle}>{service.title}</h4>
                      <p className={styles.serviceDescription}>{service.description}</p>
                      {/* --- THE BUTTON IS BACK --- */}
                      <a href={service.link} className={styles.learnMoreLink}>Learn More</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2 */}
            <div className={styles.serviceCategory}>
              <h3 className={styles.categoryTitle}>Digital Marketing</h3>
              <div className={styles.servicesList}>
                {marketingServices.map((service, index) => (
                  <div key={index} className={styles.serviceRow}>
                    <div className={styles.iconContainer}>
                      <span className={styles.serviceIcon}>{service.icon}</span>
                    </div>
                    <div className={styles.textContainer}>
                      <h4 className={styles.serviceTitle}>{service.title}</h4>
                      <p className={styles.serviceDescription}>{service.description}</p>
                      {/* --- THE BUTTON IS BACK --- */}
                      <a href={service.link} className={styles.learnMoreLink}>Learn More</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PortfolioSection />
        <WhyChooseUs />
        <Testimonials />
        <ProcessSection />
      </main>
    </>
  );
}