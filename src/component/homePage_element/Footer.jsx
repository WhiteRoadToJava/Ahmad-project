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
        <h2>Garten- und Lanschaftsbau</h2>
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
        <a href="Brothersgartenbau@gmail.com"><p>Brothersgartenbau@gmail.com</p></a>
        <p>+49 1577 9878532</p>
        <p><span>Mardieksweg 39</span><br />37627 Stadtoldendorf</p>
      </div>
      
      <div className="footer-links">
        <p>Copyright &copy; 2025 BROTHERS GRADEN</p>
        <a href="/privacy-policy">Datenschutz</a>
        <a href="/imprint">Impressum</a>
      </div>
    </div>
  );
};

export default Footer;
