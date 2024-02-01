// pages/services.js

import { useState, useEffect, useContext } from 'react';
import styles from '../styles/Services.module.css';
// import { DarkModeContext } from '@/context/DarkModeContext'

export default function Services({value}) {
  let val = value
  console.log(`from service page ${val}`)
  // const {darkMode} = useContext(DarkModeContext);
  //console.log(`from service page ${darkMode}`)
  return (
    <div className={`${ val === 'dark' ? styles.servicesDarkContainer : styles.servicesLightContainer }`}>
      <h1 className={styles.h1}>My Expertise</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.icon}>🚀</div>
            <h2 className={styles.h2}>Frontend Developer</h2>
            <p className={styles.p}>
              Crafting responsive and user-friendly interfaces using modern frontend technologies.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.icon}>💻</div>
            <h2 className={styles.h2}>Backend Developer</h2>
            <p className={styles.p}>
              Building robust and scalable server-side applications to power dynamic web experiences.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.icon}>✍️</div>
            <h2 className={styles.h2}>Technical Writer</h2>
            <p className={styles.p}>
              Translating complex technical concepts into clear and accessible documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
