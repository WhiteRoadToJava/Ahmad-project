import React from 'react'
import { serviceData } from '../../assets/assiets'
import "../../styles/hero.css";

const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={serviceData[7].image} alt="Gartengestaltung von BROTHERS GARTEN-LANDSCHAFTSBAU" />
      <div className="hero-text">
        <h2>Handwerk, das im Garten bleibt</h2>
        <p>Von der ersten Skizze bis zum letzten Stein – wir setzen Ihre Gartenprojekte in Holzminden und Umgebung mit Sorgfalt und Erfahrung um.</p>
      </div>
    </div>
  )
}

export default Hero
