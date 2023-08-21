import React from 'react'
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import FormContact from '../components/FormContact';


const Contact = () => {
  return (
    <div>
       <Navbar />
        <HeroImg2 heading="CONTACT." text="Reach out and have the best deal"/>
    <FormContact/>
        <Footer/>
    </div>
  )
}

export default Contact