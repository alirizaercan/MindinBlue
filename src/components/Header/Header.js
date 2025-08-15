// Header component for MindinBlue website
// Logo will be displayed here using header_logo.png

import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

function Header() {
  const { currentLanguage, changeLanguage, t } = useLanguage();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const location = useLocation();

  // Check if current page is home page
  const isHomePage = location.pathname === '/';

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const selectLanguage = (lang) => {
    changeLanguage(lang);
    setLanguageDropdownOpen(false);
    // Close mobile menu if open
    setIsDropdownOpen(false);
  };

  // Handle scroll detection and dropdown closing
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Close dropdown when scrolling
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
      // Close language dropdown when scrolling
      if (languageDropdownOpen) {
        setLanguageDropdownOpen(false);
      }

      // Set transparency based on scroll position (only for home page)
      if (isHomePage) {
        setIsScrolled(scrollTop > 10);
      } else {
        setIsScrolled(true); // Always "scrolled" state for non-home pages
      }
    };

    // Initial check for non-home pages
    if (!isHomePage) {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDropdownOpen, isHomePage, languageDropdownOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : 'transparent'} ${isDropdownOpen ? 'menu-open' : ''} ${!isHomePage ? 'non-home-page' : ''}`}>
      <div className="header-content">
        <Link to="/" className="logo-link">
          <img
            src="/logos/header_logo.png"
            alt="MindinBlue Logo"
            className="header-logo"
          />
        </Link>

                {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          <Link to="/">{t('home')}</Link>
          <Link to="/team">{t('ourTeam')}</Link>
          <Link to="/services">{t('services')}</Link>
          <Link to="/contact">{t('contact')}</Link>
          <a href="tel:+48506080577" className="desktop-phone-btn">+48 506 080 577</a>
          <div className="language-switcher-container desktop-only">
            <button
              className="language-switcher-btn"
              onClick={toggleLanguageDropdown}
              aria-label="Switch language"
            >
              {currentLanguage} <span className="language-arrow">▼</span>
            </button>
            {languageDropdownOpen && (
              <div className="language-dropdown">
                <button onClick={() => selectLanguage('EN')} className={currentLanguage === 'EN' ? 'active' : ''}>EN</button>
                <button onClick={() => selectLanguage('PL')} className={currentLanguage === 'PL' ? 'active' : ''}>PL</button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile/Tablet Navigation - Dropdown Style */}
        <div className="mobile-tablet-nav">
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleDropdown}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger ${isDropdownOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Dropdown Menu - Navigation Links + Language Switcher */}
        <nav className={`mobile-dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeDropdown}>{t('home')}</Link>
          <Link to="/team" onClick={closeDropdown}>{t('ourTeam')}</Link>
          <Link to="/services" onClick={closeDropdown}>{t('services')}</Link>
          <Link to="/contact" onClick={closeDropdown}>{t('contact')}</Link>
          <div className="language-switcher-mobile">
            <span className="language-switcher-label">{t('language')}</span>
            <button onClick={() => selectLanguage(currentLanguage === 'EN' ? 'PL' : 'EN')} className="language-switcher-btn-mobile">
              {currentLanguage === 'EN' ? 'PL' : 'EN'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;