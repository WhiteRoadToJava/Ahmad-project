import React from "react";
import "../../styles/header.css";
import { headerIamages } from "../../assets/assiets";
import Slide from "../Slide";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <Slide images={headerIamages} />
      <div className="header-content">
        <h1> BROTHERS GARTEN-LANDSCHAFTSBAU</h1>
        <p>Lassen Sie uns Ihren Garten nach Ihren Wünschen gestalten</p>
        <Link to="/contact">
          <button className="header-btn">Konntaktieren Sie uns</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
