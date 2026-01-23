import React from 'react'
import '../styles/DropdownList.css'
import { Link } from 'react-router-dom'


const DropdownList = ({listItems, isActive, setIsActive}) => {
  
        if (!listItems) return null;
  return (
    <div className='dropdown-menu ' >
      <ul className='dropdown-list' style={isActive ? {left: '0%',} : {left: '', display: 'none'}}>
        {listItems.map((item, index) => {
          return (
            <li onClick={() => setIsActive(!isActive)}
             key={index}><Link to={item.link}>{item.text}</Link></li>
          )
        })}
        </ul>
    </div>
  )
}

export default DropdownList
