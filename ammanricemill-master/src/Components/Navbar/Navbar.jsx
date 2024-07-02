import React, { useState } from "react"
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from "react-scroll"
import menu from '../../assets/menu.png'
const Navbar = ()=>{
  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
     mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className='container'>
       <img src={logo} alt="" className='logo' style={{ width: '100px' }} />
       <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='products' smooth={true} offset={-260} duration={500}>Products</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About Us</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact</Link></li>
       </ul>
       <img src={menu} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
