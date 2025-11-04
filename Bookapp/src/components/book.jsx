import React from 'react'
import './Book.css'

function Book({title, price}) {
  return (
    <div className='Book'>
        <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" />
        <p>{title}</p>
        <p>Rs. {price}</p>
    </div>
  )
}

export default Book