import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import ABoutContent from '../components/ABoutContent';

const About = () => {
  return (
    <div> 
    <Navbar />
      <HeroImg2 heading = "ABOUT." text="I am a passionate Fullstack Developer "/>  
      <ABoutContent/>
    <Footer/>
    </div>
  )
}

export default About