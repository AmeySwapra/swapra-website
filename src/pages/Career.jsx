import React from 'react'
import Navbar from '../component/Navbar'
import ContactTitle from '../component/ContactTitle'
import CareerJob from '../component/CareerJob'
import Footer from '../component/Footer'
function Career() {
  return (
    <>
      <Navbar/>
      <ContactTitle title={'Career'}/>
      <CareerJob/>
      <Footer/>
    </>
  )
}

export default Career