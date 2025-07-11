// Header component for MindinBlue website
// Logo will be displayed here using mindinblue_logo.png

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src="/mindinblue_logo.png"
          alt="MindinBlue Logo"
          className="header-logo"
        />
        <nav className="header-nav">
          <a href="/">Home</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
