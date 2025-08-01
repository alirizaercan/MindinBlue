// Language Context for managing current language state
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getTranslation, getLanguageTranslations } from '../utils/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  // Load language from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && (savedLanguage === 'EN' || savedLanguage === 'PL')) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const changeLanguage = (newLanguage) => {
    if (newLanguage === 'EN' || newLanguage === 'PL') {
      setCurrentLanguage(newLanguage);
      localStorage.setItem('selectedLanguage', newLanguage);
    }
  };

  // Translation helper function
  const t = (key) => {
    return getTranslation(key, currentLanguage);
  };

  // Get all translations for current language
  const translations = getLanguageTranslations(currentLanguage);

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    translations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
