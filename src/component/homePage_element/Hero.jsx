import React from 'react'
import { brandImages } from '../../assets/assiets'
import "../../styles/hero.css";
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={brandImages[1]} alt="" />
      <div className="contact-section">
        <p>Lassen Sie uns Ihren Garten nach Ihren Wünschen gestalten</p>
        <Link to="/contact">
          <button className="header-btn">Konntaktieren Sie uns</button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
