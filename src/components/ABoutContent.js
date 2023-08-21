import { Link } from 'react-router-dom'
import './AboutContentStyles.css'
import aboutPic from '../assets/about-img.jpg'
import aboutPic2 from '../assets/about-img2.jpg'
import React from 'react'

const ABoutContent = () => {
  return (
    <div className='about'>
    <div className='left'>
            <h1>Who Am I?</h1> 
            <p>I'm a versatile tech enthusiast with a passion for creating complete 
        web applications through frontend and backend expertise</p>
        <Link to="/contact" > <button className='btn'>Contact</button></Link>
    </div>
   
   <div className='right'>
<div className='img-container'>
            <div className='img-stack top'>
                <img src={aboutPic} className='img' alt="true"/>
            </div>
            <div className='img-stack bottom'>
                <img src={aboutPic2} className='img' alt="true"/>
            </div>
        </div>
   </div>  
    </div>
  )
}

export default ABoutContent