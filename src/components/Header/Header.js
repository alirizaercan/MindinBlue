// Header component for MindinBlue website
// Logo will be displayed here using header_logo.png

import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src="/logos/header_logo.png"
          alt="MindinBlue Logo"
          className="header-logo"
        />
        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/team">Team</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
