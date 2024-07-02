import React from 'react'
import '../Products/Products.css'
import basmati from '../../assets/basmatirice.jpg'
import seerarice from '../../assets/seeragasamba.jpg'
import idli from '../../assets/idlirice.jpg'
import rnr from '../../assets/rnrrice.jpg'
import sonarice from '../../assets/kaverisona.jpg'
import amman from '../../assets/ammansonarice.jpg'
import eng_tamil from './eng_tamil';
const Products = () => {
  return (
    <div id="products">
      <div className='products'>
      <div className='product'>
        <img src={basmati}alt="" />
        <h3> Basmati Rice</h3>
        <p className='stat_review' id='trans2'>Experience the exquisite aroma and delicate flavor of our premium Basmati rice, cultivated and processed with care at Sri Amman Rice Mill. Our Basmati rice features long, slender grains that cook up fluffy and separate, perfect for creating aromatic biryanis, flavorful pilafs, and mouthwatering rice dishes. </p>
        <button id='but2' style={{marginLeft:'125px',padding:'10px',width:'100px',textAlign:'right'}}onClick={eng_tamil}>In-Tamil</button>
      </div>
      <div className='product'>
        <img src={seerarice} alt="" style={{width:'95%'}}/>
        <h3 style={{marginLeft:'90px'}}>Seeraga Samba Rice</h3>
        <p className='stat_review' id='trans3'>Elevate your culinary creations with the distinctive taste and superior quality of Seeraga Samba rice, meticulously sourced and processed at Sri Amman Rice Mill. Known for its tiny, pearl-like grains and unique fragrance, Seeraga Samba rice adds a delightful touch to biryanis, pulaos, and traditional South Indian dishes. Our Seeraga Samba rice is carefully aged to enhance its natural aroma and flavor, ensuring a rich and satisfying dining experience.</p>
        <button id='but3' style={{marginLeft:'120px',padding:'10px',width:'100px',textAlign:'right'}}onClick={eng_tamil}>In-Tamil</button>
      </div>
      <div className='product'>
        <img src={idli}alt="" style={{width:'103%'}}/>
        <h3>Ponni Kuranai Rice</h3>
        <p className='stat_review' id='trans4'>Elevate your dining experience with the exceptional quality and distinct flavor of Ponni Kuranai rice, meticulously grown and processed at Sri Amman Rice Mill. Characterized by its medium-sized grains and subtle aroma, Ponni Kuranai rice is a versatile choice for a variety of culinary delights. Our Ponni Kuranai rice undergoes careful processing to preserve its natural taste and nutritional value, making it an ideal choice for health-conscious individuals.</p>
        <button id='but4' style={{marginLeft:'127px',padding:'10px',width:'100px',textAlign:'right'}}onClick={eng_tamil}>In-Tamil</button>
      </div>
      </div>
      <div className='products'>
      <div className='product'>
        <img src={rnr}alt="" />
        <h3> RNR Rice</h3>
        <p className='stat_review' id='trans5'>RNR rice varieties are often developed using advanced biotechnological tools like gene editing (e.g., CRISPR-Cas9) and marker-assisted selection, speeding up the breeding process and ensuring precise trait incorporation. These varieties also contribute to biodiversity conservation by reducing the need for chemical inputs that can harm beneficial organisms in agricultural ecosystems. Additionally, RNR rice plays a vital role in global food security efforts, especially in regions prone to crop losses due to pests, diseases, and adverse environmental conditions. </p>
        <button id='but5' style={{marginLeft:'120px',padding:'10px',width:'100px',textAlign:'right'}}onClick={eng_tamil}>In-Tamil</button>
      </div>
      <div className='product'>
        <img src={sonarice} alt="" style={{width:'390px'}}className='seera'/>
        <h3 style={{marginLeft:'90px'}}>KaveriSona</h3>
        <p className='stat_review' id='trans1'>KaveriSona rice is a high-yielding hybrid variety developed by Kaveri Seeds Company Limited in India. It combines traits like disease resistance, adaptability to varying climates, and excellent grain quality. Known for its market acceptance and popularity among farmers, KaveriSona contributes to increased agricultural productivity and sustainable farming practices. Its development involves careful breeding and testing to ensure desirable characteristics. This rice variety plays a crucial role in addressing food security challenges by providing a reliable crop option with improved yield potential and resilience.
        </p>
        <button id='but1' style={{marginLeft:'110px',padding:'10px',width:'100px',textAlign:'right'}}onClick={eng_tamil}>In-Tamil</button>
      </div>
      <div className='product'>
        <img src={amman}alt=""  />
        <h3>Ammansona</h3>
        <p className='stat_review' id='trans6'>AmmanSona rice is a hybrid variety developed by Amman Seeds Private Limited in India. It is known for its high yield potential, disease resistance, and quality attributes like grain size and cooking quality. The rice is adaptable to different environmental conditions and has gained popularity among farmers for its performance. AmmanSona contributes to increased agricultural productivity and meets market demands for quality rice. Its development involves careful breeding and testing to ensure desirable traits, making it a valuable option for sustainable rice cultivation.</p>
        <button id='but6' style={{marginLeft:'127px',padding:'10px',width:'100px',textAlign:'right'}}onClick={eng_tamil}>In-Tamil</button>
      </div>
      </div>
    </div>
    

  )
}

export default Products
