// app/about/page.js - FINAL, CORRECTED VERSION
import Navbar from '../../components/Navbar';
import AboutSection from '../../components/AboutSection'; // <-- Import the component with the video
import Footer from '../../components/Footer'; // Import Footer to complete the page layout
import '../../styles/globals.css';

export default function AboutPage() {
  return (
    <>
      {/* We add the Navbar and Footer manually here since it's a dedicated page */}
      <Navbar />
      
      {/* We are now reusing the exact same section from the homepage */}
      <AboutSection />

    </>
  );
}