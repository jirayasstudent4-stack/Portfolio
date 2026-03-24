import React from 'react'
import './Hero.css'
import profile_img from '../../assets/surya2.jpg'
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm JayaSurya,</span>Frontend Developer based in India</h1>
      <p>I’m a Frontend Developer from Tamil Nadu, India, with 1 years of experience building modern and responsive web applications.</p>
      <div className="hero-action">
      <div className="nav-connect"><Link className="anchor-link"to="contact"smooth={true}offset={-50}duration={500}>Connect With Me</Link></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
