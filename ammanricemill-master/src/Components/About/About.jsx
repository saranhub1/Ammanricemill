import React from 'react'
import '../About/About.css'
import owner from '../../assets/owner.jpg'
import play from '../../assets/play.png'
const About = ({setPlayState}) => {
  return (
    <div className='about' id="about">
      <div className="about-left">
        <img src={owner} style={{width:'60%', borderRadius:'30px'}} alt="" className='about_img'/>
        <img src={play} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h2> From our fields to your plate, taste the difference </h2>
        <p>As the proud owner of Sri Amman Rice Mill, I am delighted to share our story with you. Our journey began with a vision to provide families with the finest quality rice products, straight from the heart of the paddy fields to their dining tables.
        Growing up surrounded by the lush green fields and rich agricultural heritage of our region, I developed a deep appreciation for the importance of wholesome, nourishing food. This appreciation fueled my passion to establish Sri Amman Rice Mill, where we uphold the values of quality, authenticity, and integrity in everything we do.
        </p>
        <p>At Sri Amman Rice Mill, we understand the significance of rice in our daily lives – it's more than just a staple food; it's a symbol of togetherness, nourishment, and tradition. That's why we are committed to sourcing the finest grains from trusted farmers who share our dedication to excellence.

From our state-of-the-art processing facilities to our stringent quality control measures, every aspect of our operations is geared towards delivering rice products of unparalleled freshness, flavor, and nutritional value. We take pride in preserving the natural essence of rice, ensuring that each grain retains its inherent goodness. </p>
      </div>
      
    </div>
  )
}

export default About
