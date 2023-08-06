import "./FooterStyles.css"
import { FaHome, FaPhone,  FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"


import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
        <div className="location">
            <FaHome  size = {20} style ={{color: "#fff", marginRight: "2rem"}}/>
            <div>
            <p>99 Dunbar str, Yeoville</p>
            <p>Johannesburg</p>
        </div>
        </div>
       
        <div className="Phone">
        <h4> <FaPhone  size = {20} style={{color: "#fff",  marginRight: "2rem"}}/>
       073-066-2618</h4>
        
        </div>

        <div className="email">
        <h4> <FaMailBulk  size = {20} style={{color: "#fff",  marginRight: "2rem"}}/>
     ismael@gmail.com</h4>
        
        </div>

        </div>

        <div className="Right">
        <h4> About Ismael</h4>
        <p>As a fullstack developer, I'm a versatile tech enthusiast with a passion for creating complete 
        web applications through frontend and backend expertise</p>

        <div className="social">
        <FaFacebook  size = {30} style ={{color: "#fff", marginRight: "1rem"}}/>
        <FaTwitter  size = {30} style ={{color: "#fff", marginRight: "1rem"}}/>
        <FaLinkedin size = {30} style ={{color: "#fff", marginRight: "1rem"}}/>

        </div>
            
        </div>
        </div>
    </div>
  )
}

export default Footer