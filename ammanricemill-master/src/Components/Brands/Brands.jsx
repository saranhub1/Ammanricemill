import React from 'react'
import '../Brands/Brands.css'
import brand1 from '../../assets/ajanta.jpg'
import brand2 from '../../assets/Arogya.jpg'
import brand3 from '../../assets/hilli.jpg'
import brand4 from '../../assets/saidhami.jpg'
import arrow from '../../assets/arrow.png'
const Brands = () => {
  return (
    <div className="brands">
      <div className="gallery">
          <img src={brand1} alt=""/>
          <img src={brand2} alt=""/>
          <img src={brand3} alt=""/>
          <img src={brand4} alt=""/>
      </div>
      
      
    </div>
  )
}

export default Brands
