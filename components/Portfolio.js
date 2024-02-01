// pages/portfolio.js

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Portfolio.module.css';

const articlesData = [
  {
    id: 1,
    title: 'Article 1',
    description: 'Description of Article 1.',
    image: '/images/jscert.jpg', // Add image path
  },
  {
    id: 2,
    title: 'Article 2',
    description: 'Description of Article 2.',
    image: '/images/jscert.jpg', // Add image path
  },
  {
    id: 3,
    title: 'Article 3',
    description: 'Description of Article 3.',
    image: '/images/jscert.jpg', // Add image path
  },
  {
    id: 4,
    title: 'Article 4',
    description: 'Description of Article 4.',
    image: '/images/jscert.jpg', // Add image path
  },
  {
    id: 5,
    title: 'Article 5',
    description: 'Description of Article 5.',
    image: '/images/jscert.jpg', // Add image path
  },
];

const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of Project 1.',
    image: '/images/jscert.jpg', // Add image path
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2.',
    image: '/images/jscert.jpg', // Add image path
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description of Project 3.',
    image: '/images/jscert.jpg', // Add image path
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Description of Project 4.',
    image: '/images/jscert.jpg', // Add image path
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Description of Project 5.',
    image: '/images/jscert.jpg', // Add image path
  },
];

// pages/portfolio.js

// ... (imports and initial code)

const Portfolio = ({value}) => {
    let val = value; 
    const [isVisible, setIsVisible] = useState(false);
    const [visibleArticles, setVisibleArticles] = useState(3); // Initial number of visible articles
    const [visibleProjects, setVisibleProjects] = useState(3); // Initial number of visible projects
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    const handleMoreClick = (type) => {
      // Increase the number of visible articles or projects when "More" is clicked
      if (type === 'article') {
        setVisibleArticles(articlesData.length);
      } else if (type === 'project') {
        setVisibleProjects(projectsData.length);
      }
    };

    const handleLessClick = (type) => {
        // Reduce the number of visible articles or projects when "Less" is clicked
        if (type === 'article') {
          setVisibleArticles(3);
        } else if (type === 'project') {
          setVisibleProjects(3);
        }
      };
  
    const renderCards = (data, type, visibleCount) =>
      data.slice(0, visibleCount).map((item) => (
        <div key={item.id} className={`${styles.card} ${styles[type]}`}>
          <div className={`${styles.cardContent} ${isVisible ? styles.visible : ''}`}>
            <img src={item.image} alt={item.title} className={styles.cardImage} />
            <div className={styles.textContainer}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className={styles.openButton}>Open {type.charAt(0).toUpperCase() + type.slice(1)}</button>
            </div>
          </div>
        </div>
      ));
  
    return (
      <div className={`${val === 'dark' ? styles.darkPageContainer : styles.lightPageContainer}`}>
        <h1 className={styles.h1}>Projects & Articles</h1>
        <p className={styles.pageDescription}>Explore my articles and projects below.</p>

        <section className={styles.section}>
          <h2 className={styles.h2}>Articles</h2>
          <div className={styles.cardsContainer}>{renderCards(articlesData, 'article', visibleArticles)}</div>
          {visibleArticles < articlesData.length ? (
            <button className={styles.moreLink} onClick={() => handleMoreClick('article')}>
              More Articles
            </button>
          ) : null}
          {visibleArticles > 3 ? (
            <button className={styles.lessLink} onClick={() => handleLessClick('article')}>
              Less Articles
            </button>
          ) : null}
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Projects</h2>
          <div className={styles.cardsContainer}>{renderCards(projectsData, 'project', visibleProjects)}</div>
          {visibleProjects < projectsData.length ? (
            <button className={styles.moreLink} onClick={() => handleMoreClick('project')}>
              More Projects
            </button>
          ) : null}
          {visibleProjects > 3 ? (
            <button className={styles.lessLink} onClick={() => handleLessClick('project')}>
              Less Projects
            </button>
          ) : null}
        </section>
      </div>
    );
  };
  
  export default Portfolio;
  