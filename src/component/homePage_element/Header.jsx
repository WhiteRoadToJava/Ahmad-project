import React from 'react'
import "../../styles/header.css";
import { headerIamages } from '../../assets/assiets';
import Slide from '../Slide';
const Header = () => {
  return (
    <div className='header-container'>
        <Slide images={headerIamages}/>
        <div className='header-content'>
          <h1>this is the title</h1>
          <p>this is the paragraph</p>
          <button className="header-btn">Contact us</button>
        </div>
    </div>
  )
}

export default Header
