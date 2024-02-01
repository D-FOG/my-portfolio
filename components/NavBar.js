// components/NavBar.js
"use client"
import Link from 'next/link';
import { FiSun, FiMoon, FiUser, FiMail, FiInfo, FiGitBranch, FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import styles from '../styles/NavBar.module.css';
import '../styles/globals.css'
// import {useDarkMode} from '../context/DarkModeContext'
import {useContext} from 'react'
import { DarkModeContext } from '@/context/DarkModeContext'


export default function NavBar() {
  // const { darkMode, toggleDarkMode } = useDarkMode();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const {toggleDarkMode, toggleLightMode, darkMode} = useContext(DarkModeContext)
  console.log(`from NavBar ${darkMode}`)

  useEffect(() => {
    // Check the window width after the component mounts
    setIsMobile(window.innerWidth <= 768);

    // Update isMobile when the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // ${darkMode === 'dark' ? styles.darkLandingContent : lightLandingContent}

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // ${}-`${darkMode ? styles.darkMode : ''}`
  return (
    <nav className={`${darkMode === 'dark' ? styles.darkNavbar : styles.lightNavbar}`}>
      <div className={styles.titleContainer}>
        {isMobile && ( // Check if it's a mobile device
            <div className={`${styles.mobileMenu} ${styles.showMobile}`} onClick={toggleSidebar}>
              {showSidebar ? <FiX /> : <FiMenu />}
            </div>
          )}
        <Link href="/" className={styles.title}>
          MeFolio <FiUser className={styles.icon} />
        </Link>
      </div>

      <div className={`${styles.tabsContainer} ${showSidebar ? styles.showSidebar : ''}`}>
        <Link href="/services" className={styles.tab}>
          Services <FiSun className={styles.icon} />
        </Link>
        <Link href="/about" className={styles.tab}>
          About Me <FiInfo className={styles.icon} />
        </Link>
        <Link href="/about" className={styles.tab}>
          Portfolio <FiGitBranch className={styles.icon} />
        </Link>
        <Link href="/contact" className={styles.tab}>
          Contact <FiMail className={styles.icon} />
        </Link>
      </div>

      <div className={`${styles.darkModeToggle}`} onClick={darkMode === 'dark' ? toggleLightMode : toggleDarkMode}>
        {darkMode === 'dark' ? <FiSun /> : <FiMoon />}
      </div>
    </nav>
  );
}
