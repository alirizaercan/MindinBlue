// Footer component
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a
            href="https://www.facebook.com/themindinblue"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img
              src="/logos/Facebook_Logo.png"
              alt="Facebook"
              className="footer-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/themindinblue/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="/logos/Instagram_Logo.png"
              alt="Instagram"
              className="footer-icon"
            />
          </a>
          <a
            href="https://www.tiktok.com/@themindinblue"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <img
              src="/logos/TikTok_Logo.png"
              alt="TikTok"
              className="footer-icon"
            />
          </a>
          <a
            href="https://www.youtube.com/@themindinblue"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <img
              src="/logos/YouTube_Logo.png"
              alt="Youtube"
              className="footer-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/themindinblue/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="/logos/LinkedIn_Logo.png"
              alt="LinkedIn"
              className="footer-icon"
            />
          </a>
        </div>
        <span className="copyright">© 2025 Mind in Blue</span>
      </div>
    </footer>
  );
}

export default Footer;
