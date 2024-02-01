// components/SkillsSection.js

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import Image from 'next/image';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/SkillSection.module.css';

// Replace these placeholder image URLs with your actual image URLs
const skillImages = {
  React: '/images/react1.svg', // Example placeholder image
  'Node.js': '/images/node1.svg',
  JavaScript: '/images/jscript.svg',
  HTML: '/images/html5.svg',
  CSS: '/images/css3.svg',
  MongoDB: '/images/mongodb1.svg',
  TypeScript: '/images/tscript.svg',
  GitHub: '/images/git.svg',
  // Add more skills and images as needed
};

const certificationImages = {
  'TypeScript': '/images/tscert.jpg',
  'JavaScript': '/images/jscert.jpg',
  'AWS': '/images/Aws-badge.png',
  'NodeJS': '/images/nodecert.jpg', // Example placeholder image
  // Add more certifications and images as needed
};

export default function SkillsSection({newVal}) {
  let val = newVal
  console.log(`skillsSection ${val}`)
  const skills = ['React', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'MongoDB', 'TypeScript', 'GitHub']; // Add your skills

  const certifications = ['TypeScript', 'JavaScript', 'AWS', 'NodeJS']; // Add your certifications

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Set to true to enable automatic sliding
    autoplaySpeed: 5000, // Set the speed of the automatic sliding in milliseconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderSkillImages = () =>
    skills.map((skill, index) => (
      <div className={styles.centerSkill}>
        <div key={index} className={styles.skillImage}>
          <Image className={styles.img1}src={skillImages[skill]} alt={skill} width={getSkillImageWidth(skill)} height={getSkillImageHeight(skill)}/>
          {/* <p>{skill}</p> */}
        </div>
      </div>
    ));

  const renderCertificationImages = () =>
    certifications.map((certification, index) => (
      <div key={index} className={styles.certificationImage}>
        <Image className={styles.img} src={certificationImages[certification]} alt={certification} width={getCertificationImageWidth(certification)} height={getCertificationImageHeight(certification)}/>
        {/* <p>{certification}</p> */}
      </div>
    ));

  // Replace these functions with the logic to determine the desired width and height for each image
  const getSkillImageWidth = (skill) => {
    // Logic to determine the width for each skill image
    if (skill === 'MongoDB') {
      return 250;
    } else if (skill === 'Node.js') {
      return 200;
    } else {
      return 100;
    }
  };

  const getSkillImageHeight = (skill) => {
    // Logic to determine the height for each skill image
    if (skill === 'AWS') {
      return 150;
    } else if (skill === 'Node.js') {
      return 120;
    } else {
      return 100;
    }
  };

  const getCertificationImageWidth = (certification) => {
    // Logic to determine the width for each certification image
    if (certification === 'AWS') {
      return 300;
    } else if (certification === 'Node.js') {
      return 700;
    } else {
      return 400;
    }
  };

  const getCertificationImageHeight = (certification) => {
    // Logic to determine the height for each certification image
    if (certification === 'React/Nextjs') {
      return 300;
    } else if (certification === 'Node.js') {
      return 100;
    } else {
      return 400;
    }
  };

  return (
    <div className={`${val === 'dark' ? styles.darkSkillsSection : styles.lightSkillsSection}`}>
      <h2 className={styles.h2}>Skills & Technologies</h2>
      <Slider {...carouselSettings}>{renderSkillImages()}</Slider>

      <h2 className={styles.h2}>Certifications</h2>
      <Slider {...carouselSettings}>{renderCertificationImages()}</Slider>
    </div>
  );
}
