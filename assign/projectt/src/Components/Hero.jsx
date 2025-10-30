import React from 'react'
import "./Hero.css"
import card from '../card/Card'
import bmw from "../../assets/bmw.jpg"
import lam from "../../assets/lamborghini.jpg"
import rag from "../../assets/rangerover.jpg"
function Hero() {
  return (
<div >
  <h1 className='msg'>Welcome To Our Car DealerShip</h1>
    <div className='hero'>
<Card name="BMW" price="Rs 1.9cr" imageurl={bmw}/>
<Card name="LAMBORGHINI" price="Rs 5cr" imageurl={lam} />
<Card name="RANGE ROVER" price="Rs 2.5CR" imageurl={rag}/>
</div>

</div>
  )
}

export default Hero

