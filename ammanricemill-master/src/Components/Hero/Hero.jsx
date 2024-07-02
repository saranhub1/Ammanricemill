import React from "react"
import './Hero.css'
import arrow from '../../assets/arrow.png'
import { Link } from "react-scroll"
const Hero =() =>{
  return(
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>Unlock the essence of tradition in every grain.</h1>
          <h2>Taste the difference with Sri Amman Rice Mill. </h2>
        <p>At Sri Amman Rice Mill, we are dedicated to providing you with the finest quality rice products, sourced directly from the fields and processed with care to retain their natural flavor and nutritional value. With decades of experience in the industry, we take pride in offering premium rice varieties to meet the diverse culinary needs of our customers.</p>
        <Link to='products' smooth={true} offset={-260} duration={500} className="btn">Explore more <img src={arrow} alt="" /></Link>
      </div>
    </div>
  )
}

export default Hero
