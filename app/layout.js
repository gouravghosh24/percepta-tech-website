// app/layout.js - FINAL AND CORRECT VERSION

import { Inter } from "next/font/google";
import Footer from "../components/Footer"; // Imports the Footer component
import '../styles/globals.css';         // Imports your site's global styles

const inter = Inter({ subsets: ["latin"] });

// This sets the metadata for your entire site (e.g., for the browser tab title)
export const metadata = {
  title: "Percepta Tech - Clarity in Ideas",
  description: "Website Development and SEO services by Percepta Tech.",
};

// This is the main layout for your website
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {/* This is where your individual page content (like the homepage) will be displayed */}
        {children} 
        
        {/* This will display the Footer component at the bottom of every page */}
        <Footer /> 

      </body>
    </html>
  );
}