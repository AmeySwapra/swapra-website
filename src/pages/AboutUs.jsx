import React from 'react'
import Navbar from '../component/Navbar'
import ContactTitle from '../component/ContactTitle'
import AboutCompany from '../component/AboutCompany'
import Footer from '../component/Footer'

function AboutUs() {
  return (
    <>
      <Navbar/>
      <ContactTitle title={'About Us'}/>
      <AboutCompany/>
      <Footer/>
    </>
  )
}

export default AboutUs