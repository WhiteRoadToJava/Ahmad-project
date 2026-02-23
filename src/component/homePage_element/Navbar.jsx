import React, { useEffect, useState } from "react";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
import DropdownList from "../../component/DropdownList";
import { brandImages } from "../../assets/assiets"; 
const dropdownList = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/Services",
    text: "Services",
  },
  {
    link: "/contact",
    text: "Contact",
  },
  {
    link: "/about",
    text: "About",
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
        <div><img className="brand-logo" src={brandImages[0]} alt="" /></div>

        <div>
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="hamb" onClick={() => setIsActive(!isActive)}>
            <div className="bar"></div>
          </div>
          <div className="btn-container">
            <Link to='/contact'>
              <button className="btn" >Book a Call</button>
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
