// pages/contact.js

import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = ({value}) => {
  let val = value;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to handle form submission and send email
    // You would typically send a request to a server-side endpoint
    // to handle the email sending logic
  };

  return (
    <div className={`${val === 'dark' ? styles.darkContactContainer : styles.lightContactContainer}`}>
      <h1 className={styles.h1}>Contact Me</h1>
      <p className={styles.pageDescription}>Fill the form to message me via email.</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.area1}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="firstName">First Name:</label>
            <input
              className={styles.input1}
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="lastName">Last Name:</label>
            <input
              className={styles.input2}
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
    
        <div className={styles.area2}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email:</label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className={styles.area3}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="subject">Subject:</label>
            <input
              className={styles.input}
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="message">Message:</label>
            <textarea
              className={styles.input}
              type="textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              columns={25}
              required
            />
          </div>
        </div>
        
        {/* Repeat the above structure for other form fields (lastName, email, subject, message) */}

        <div className={styles.sendGroup}>
          <button type="submit" className={styles.sendButton}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
