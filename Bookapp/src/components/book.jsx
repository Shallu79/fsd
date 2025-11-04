import React from 'react'
import './Book.css'

function Book({title, price}) {
  return (
    <div className='Book'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcwhPhFEnyOzxoKysVzNiMn245tFGSEBFavA&s" alt="" />
        <p>{title}</p>
        <p>Rs. {price}</p>
    </div>
  )
}

export default Book