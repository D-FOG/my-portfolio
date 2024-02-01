"use client"
// pages/index.js

import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Landing.module.css'; // Import the CSS module
//import Layout from './layout';
import Services from '../components/Services'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import '../styles/globals.css'
import { DarkModeContext } from '@/context/DarkModeContext'
import Layout from './layout';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
export default function Home() {
  const {darkMode} = useContext(DarkModeContext)
  const [isVisible, setIsVisible] = useState(true);
  console.log(`from page.js ${darkMode}`)
  //const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode((prevDarkMode) => !prevDarkMode);
  // };
  //console.log(darkMode)

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY;
      const threshold = 300; // Adjust as needed
      setIsVisible(yOffset <= threshold);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <Layout>
      {/* <DarkModeProvider> */}
        <div className={ `${darkMode === 'dark' ? styles.darkLandingContainer: styles.lightLandingContainer  }` }>
          <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.textContainer}>
              <h1 className={styles.H1}>Hi, I'm Favour Ogbonda</h1>
              <p className={styles.P}>
                Welcome to my portfolio site. I have 3+ years of experience in web development and 1+ years in Technical writing. To get to know more about me you can look through this site.
              </p>
              <Link href="/contact" className={styles.button}>
                Get in Touch
              </Link>
              <div className={styles.socialIcons}>
                <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                  <FiGithub className={styles.iconGithub} />
                </a>
                <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
                  <FiTwitter className={styles.iconTwitter} />
                </a>
                <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin className={styles.iconLinkedin} />
                </a>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src="/images/favor1a.jpg" // Replace with your image path
                alt="Your Image"
                width={400} // Set the desired width
                height={400} // Set the desired height
              />
            </div>
          </div>
        </div>
        <Services value={darkMode}/>
        <About value={darkMode}/>
        <Portfolio value={darkMode}/>
        <Contact value={darkMode}/>
      {/* </DarkModeProvider> */}
    </Layout>
      );
}
