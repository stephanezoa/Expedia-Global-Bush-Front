// src/context/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('FR');
  
  // Charger la langue au démarrage
  useEffect(() => {
    const savedLang = localStorage.getItem('globalbush-language');
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      // Détecter la langue du navigateur
      const browserLang = navigator.language.split('-')[0];
      setLanguage(browserLang === 'fr' ? 'FR' : 'EN');
    }
  }, []);
  
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('globalbush-language', lang);
  };
  
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};