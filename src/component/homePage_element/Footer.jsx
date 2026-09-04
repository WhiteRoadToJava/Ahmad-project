import React from "react";
import "../../styles/footer.css";
import { icons } from "../../assets/assiets";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-brand">
        <h1>
          BROTHERS <span>GARTEN</span>
        </h1>
        <h2>Garten- und Landschaftsbau</h2>
        <div className="social-icons">
          <div className="social-item">
            <a
              href="https://www.facebook.com/share/1Bp7Xnhudo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={icons[0]} alt="Facebook" />
            </a>
          </div>
          <div className="social-item">
            <a
              href="https://www.instagram.com/brotehers_gartenlandschaftsba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={icons[1]} alt="Instagram" />
            </a>
          </div>
          <div className="social-item">
            <a
              href="https://www.tiktok.com/@brothers.gartenla"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <img src={icons[2]} alt="TikTok" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-contact">
        <a href="mailto:brothersgartenbau@gmail.com"><p>brothersgartenbau@gmail.com</p></a>
        <p>+49 1577 9878532</p>
        <p><span>Grünstr. 10</span><br />37632 Holzminden</p>
      </div>
      
      <div className="footer-links">
        <p>Copyright &copy; {new Date().getFullYear()} BROTHERS GARTEN</p>
        <a href="/privacy-policy">Datenschutz</a>
        <a href="/imprint">Impressum</a>
      </div>
    </div>
  );
};

export default Footer;
