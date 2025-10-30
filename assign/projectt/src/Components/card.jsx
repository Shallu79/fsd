import React from 'react'
import "./card.css"

function Card(props) {
  return (
    <div className='card'>
      <img src={props.imageurl}/>  
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>    
    </div>
  )
}

export default Card

Card.jsx