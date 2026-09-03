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
            <a>
              <img src={icons[0]} alt="" />
            </a>
          </div>
          <div className="social-item">
            <a>
              <img src={icons[1]} alt="" />
            </a>
          </div>
          <div className="social-item">
            <a>
              <img src={icons[2]} alt="" />
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
