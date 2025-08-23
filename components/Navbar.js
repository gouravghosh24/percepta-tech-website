// components/Navbar.js - DEFINITIVE FINAL VERSION
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      },
      () => {
        setError("Location access denied.");
      }
    );
  }, []);

  const fetchWeatherData = async (lat, lon) => {
    const API_KEY = "25e0c8db676a79e1e3220a2ecbf20c64"; // Your API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setWeather({
          city: data.name,
          country: data.sys.country,
          temp: Math.round(data.main.temp),
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        });
      } else {
        setError("Invalid API key.");
      }
    } catch (err) {
      setError("Weather unavailable.");
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Percepta Tech Logo"
              width={140}
              height={35}
              priority
            />
          </Link>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li><Link href="/" className={styles.navLink}>Home</Link></li>
            <li onMouseEnter={() => setOpenDropdown("services")} onMouseLeave={() => setOpenDropdown(null)}>
              <Link href="/services" className={styles.navLink}>Services</Link>
              {openDropdown === "services" && (
                <div className={styles.dropdown}>
                  <Link href="#" className={styles.dropdownLink}> Prototype-First Design </Link>
                  <Link href="#" className={styles.dropdownLink}> Enterprise-Grade Development </Link>
                  <Link href="#" className={styles.dropdownLink}> Custom CRM & Management Systems </Link>
                  <Link href="#" className={styles.dropdownLink}> Advanced Analytics & Tracking </Link>
                  <Link href="#" className={styles.dropdownLink}> Strategic Business Growth </Link>
                  <Link href="#" className={styles.dropdownLink}> Digital Growth Partnership </Link>
                </div>
              )}
            </li>
            <li onMouseEnter={() => setOpenDropdown("company")} onMouseLeave={() => setOpenDropdown(null)}>
              <a className={styles.navLink}>Company</a>
              {openDropdown === "company" && (
                <div className={styles.dropdown}>
                  <Link href="/about" className={styles.dropdownLink}>About Us</Link>
                  <Link href="/#work" className={styles.dropdownLink}>Our Work</Link>
                </div>
              )}
            </li>
            <li onMouseEnter={() => setOpenDropdown("pricing")} onMouseLeave={() => setOpenDropdown(null)}>
              <a className={styles.navLink}>Pricing</a>
              {openDropdown === "pricing" && (
                <div className={styles.dropdown}>
                  <Link href="#" className={styles.dropdownLink}>Website Packages</Link>
                  <Link href="#" className={styles.dropdownLink}>Marketing Plans</Link>
                </div>
              )}
            </li>
          </ul>
        </nav>

        <div className={styles.weatherCapsule}>
          {error && <span className={styles.weatherError}>{error}</span>}
          {!weather && !error && (<span className={styles.weatherLoading}>Loading...</span>)}
          {weather && (
            <div className={styles.weatherDisplay}>
              <div className={styles.weatherTemp}>{weather.temp}°C</div>
              <img src={weather.icon} alt="Weather icon" className={styles.weatherIcon} />
              <div className={styles.weatherLocation}> {weather.city}, {weather.country} </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}