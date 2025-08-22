// app/contact/page.js
"use client"; // This is crucial! It tells Next.js this is an interactive client component.

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import styles from '../../styles/ContactPage.module.css';
import '../../styles/globals.css';

// --- List of services clients can choose from ---
const allServices = [
  { id: 'design', name: 'Prototype-First Design' },
  { id: 'dev', name: 'Enterprise-Grade Development' },
  { id: 'cms', name: 'Custom CRM & CMS Solutions' },
  { id: 'seo', name: 'Data-Driven SEO & SMO' },
  { id: 'analytics', name: 'Advanced Analytics & Tracking' },
  { id: 'growth', name: 'Digital Growth Partnership' },
];

export default function ContactPage() {
  // --- State Management ---
  // This hook will keep track of which services are currently selected.
  const [selectedServices, setSelectedServices] = useState([]);

  // --- Function to handle adding/removing services ---
  const toggleService = (service) => {
    setSelectedServices(prevSelected => {
      // Check if the service is already in the cart
      if (prevSelected.find(s => s.id === service.id)) {
        // If yes, remove it
        return prevSelected.filter(s => s.id !== service.id);
      } else {
        // If no, add it
        return [...prevSelected, service];
      }
    });
  };

  return (
    <>
      <Navbar />
      <main className={styles.contactPage}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Let's Build Something Amazing Together</h1>
            <p className={styles.subtitle}>Start by selecting the services you're interested in, or simply send us a message.</p>
          </div>

          <div className={styles.mainGrid}>
            
            {/* --- Left Column: Service Selector & Cart --- */}
            <div className={styles.serviceSelector}>
              <h2 className={styles.selectorTitle}>1. Select Your Services</h2>
              <div className={styles.serviceList}>
                {allServices.map(service => (
                  <div 
                    key={service.id}
                    // This is the key for the interactive selection
                    className={`${styles.serviceItem} ${selectedServices.find(s => s.id === service.id) ? styles.serviceItemSelected : ''}`}
                    onClick={() => toggleService(service)}
                  >
                    <span className={styles.checkbox}></span>
                    <span className={styles.serviceName}>{service.name}</span>
                  </div>
                ))}
              </div>

              {/* --- The "Cart" Summary --- */}
              {selectedServices.length > 0 && (
                <div className={styles.cartSummary}>
                  <h3 className={styles.summaryTitle}>Your Project Scope:</h3>
                  <ul className={styles.selectedList}>
                    {selectedServices.map(service => (
                      <li key={service.id} className={styles.selectedItem}>{service.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* --- Right Column: Contact Form --- */}
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>2. Tell Us About You</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Tell us a bit about your project, goals, or timeline..."></textarea>
                </div>
                {/* This hidden input sends the "cart" data with the form */}
                <input type="hidden" name="selected_services" value={selectedServices.map(s => s.name).join(', ')} />
                <button type="submit" className={styles.submitButton}>Request a Free Consultation</button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* --- Floating Live Chat Button --- */}
      <div className={styles.liveChatButton}>
        <span className={styles.chatIcon}>💬</span>
        <span>Chat with Sales</span>
      </div>
    </>
  );
}