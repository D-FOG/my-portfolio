"use client"
// pages/about.js

import { useState, useEffect } from 'react';
import styles from '../styles/About.module.css';
import Image from 'next/image';
import SkillSection from './SkillSection'

export default function About({value}) {
  let val = value;
  console.log(` about page ${val}`)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY;
      const threshold = 300; // Adjust as needed
      setIsVisible(yOffset > threshold);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`${val === 'dark' ? styles.darkAboutContainer : styles.lightAboutContainer} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/favor1b.jpg" // Replace with your image path
            alt="Your Image"
            width={350} // Set the desired width
            height={350} // Set the desired height
            className={styles.roundedBorder}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.h1}>About Me</h1>
          <p className={styles.p}>
          Welcome to my About Me page. I come from the vibrant and diverse country of Nigeria in Africa. My passion lies in the realms of web development and technical writing. I've delved into various frameworks and programming languages, showcasing some of them in my skills section. As I embark on new projects, I look forward to expanding this list. 
          </p>
          <p className={styles.p}>
          Proudly, I hold the title of a certified AWS Cloud Practitioner, equipped with knowledge spanning across various AWS services. Beyond coding, I thrive in the world of content creation — a technical writer contributing to platforms like Smashing Magazine and OpenReplay. Currently, I continue my journey with OpenReplay, weaving words that bridge the gap between complexity and understanding. 
          </p>
          <p className={styles.p}>
          In my world, whether it's crafting code or composing articles, my fingers dance on the keyboard. Away from the screen, I find joy in watching anime, particularly as a devoted One Piece enthusiast. Football holds a special place in my heart, and I proudly support Barcelona. Let's connect and share our passions! 
          </p>
        </div>
      </div>
      <SkillSection newVal={value}/>
    </>
  );
}
