import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg"

import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
<div className="mask">
<img className="into-img" src={IntroImg} alt="intro-img"/>
</div>
<div>

<div className="content">
<p>Hi, I'm a fullstack developer.</p>
<h1> React Developer</h1>
    <Link to="/project" className="btn">Projects</Link>
    <Link to="/contact" className="btn btn-light">Contact</Link>
</div>

</div>

    </div>
  )
} 

export default HeroImg