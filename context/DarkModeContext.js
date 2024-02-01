"use client"
import React, { createContext, useState } from 'react';
import '../styles/globals.css';
import Error from 'next/error';

export const DarkModeContext = createContext({});

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState('dark');

  const toggleDarkMode = () => {
    setDarkMode('dark');
  };

  const toggleLightMode = () => {
    setDarkMode('light');
  }

  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode, toggleLightMode}}>
      <div className={`${darkMode}`}> {children} </div>
    </DarkModeContext.Provider>
  );
};

