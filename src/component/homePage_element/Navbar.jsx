import React, { useEffect, useState } from "react";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
import DropdownList from "../../component/DropdownList";
import { logoImage } from "../../assets/assiets"; 
const dropdownList = [
  {
    link: "/",
    text: "Startseite",
  },
  {
    link: "/services",
    text: "Leistungen",
  },
  {
    link: "/contact",
    text: "Kontakt",
  },
  {
    link: "/about",
    text: "Über uns",
  },
];
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // التحقق مما إذا كان المستخدم نزل أكثر من 250px
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // تنظيف الحدث عند مسح المكون من الذاكرة
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${
          scrolled ? "navbar-container scrolled" : "navbar-container"
        }`}
      >
        <div><img className="brand-logo" src={logoImage} alt="BROTHERS GARTEN-LANDSCHAFTSBAU Logo" /></div>

        <div>
          <ul className="navbar-links">
            <li>
              <Link to="/">Startseite</Link>
            </li>
            <li>
              <Link to="/services">Leistungen</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
            <li>
              <Link to="/about">Über uns</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="hamb" onClick={() => setIsActive(!isActive)}>
            <div className="bar"></div>
          </div>
          <div className="btn-container">
            <Link to='/contact'>
              <button className="btn" >Jetzt anfragen</button>
            </Link>
            
          </div>
        </div>
      </div>
      <DropdownList
        listItems={dropdownList}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
};
export default Navbar;
