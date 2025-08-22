// app/contact/page.js - CORRECTED
"use client";

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import styles from '../../styles/ContactPage.module.css';
import '../../styles/globals.css';

const allServices = [
  // ... service list ...
];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service) => {
    // ... toggle function ...
  };

  return (
    <>
      <Navbar />
      <main className={styles.contactPage}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Let's Build Something Amazing Together</h1>
            {/* --- THIS IS THE CORRECTED LINE --- */}
            <p className={styles.subtitle}>Start by selecting the services you&apos;re interested in, or simply send us a message.</p>
          </div>
          {/* ... rest of the page ... */}
        </div>
      </main>
      {/* ... live chat button ... */}
    </>
  );
}