// Header component for MindinBlue website
// Logo will be displayed here using header_logo.png

import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if current page is home page
  const isHomePage = location.pathname === '/';

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
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
  }, [isDropdownOpen, isHomePage]);

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
          <Link to="/">Home</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <a href="tel:+48506080577" className="desktop-phone-btn">+48 (506) 080-577</a>
        </nav>

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

        {/* Mobile Dropdown Menu */}
        <nav className={`mobile-dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeDropdown}>Home</Link>
          <Link to="/team" onClick={closeDropdown}>Our Team</Link>
          <Link to="/services" onClick={closeDropdown}>Services</Link>
          <Link to="/contact" onClick={closeDropdown}>Contact</Link>
          <a href="tel:+48506080577" className="mobile-phone-link" onClick={closeDropdown}>
            +48 (506) 080-577
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;