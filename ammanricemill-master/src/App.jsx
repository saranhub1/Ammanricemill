import React, { useState } from "react"
import Products from "./Components/Products/Products"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Title from "./Components/Title/Title"
import About from "./Components/About/About"
import Brands from "./Components/Brands/Brands"
import Testimonials from "./Components/Testimonials/Testimonials"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"
import VisitorCounter from "./Components/VisitorCounter/VisitorCounter"
const App = () => {
  const [playState,setPlayState]=useState(false);

  return (
    <div>
       <Navbar/>
       <Hero/>
       <Title subTitle='Our Products' title='What We Have'/>
       <Products />
       <About setPlayState={setPlayState}/>
       <Title subTitle='Brands' title='Popular Brands We Have'/>
       <Brands/>
       <Title subTitle='TESTIMONIALS' title='What Our Customer Says'/>
       <Testimonials/>
       <Title subTitle='Contact Us' title='For Booking get to know us'/>
       <Contact/>
       <VisitorCounter/>
       <Footer/>
       <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
