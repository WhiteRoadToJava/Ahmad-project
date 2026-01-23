import React from 'react'
import "../styles/card.css";
const Card = ({cardDetails}) => {
        if (!cardDetails) return null;
  return (
    <div className='card-container'>
        <img src={cardDetails.image} alt="" />
      <div className='card-content'>
        <h2 className='card-title'>{cardDetails.title}</h2>
      </div>
    </div>
  )
}

export default Card
