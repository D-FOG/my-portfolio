// components/Footer.js

import React from 'react';
import Link from 'next/link';
import { FaHeart, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        Made with <FaHeart className={styles.heartIcon} /> by Favour &copy; {currentYear}
      </p>
      <div className={styles.socialIcons}>
        <Link href="https://www.linkedin.com/your-linkedin-profile">
          <FaLinkedin />
        </Link>
        <Link href="https://twitter.com/your-twitter-profile">
            <FaTwitter />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
