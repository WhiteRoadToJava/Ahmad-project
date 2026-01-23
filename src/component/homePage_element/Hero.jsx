import React from 'react'
import { brandImages } from '../../assets/assiets'
import "../../styles/hero.css";
const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={brandImages[0]} alt="" />
    </div>
  )
}

export default Hero
