import React from 'react'
import Navbar from '../component/Navbar'
import ContactTitle from '../component/ContactTitle'
import ContactDetails from '../component/ContactDetails'
import ContactMap from '../component/ContactMap'
import ContactForm from '../component/ContactForm'
import Footer from '../component/Footer'
function Contact() {
  return (
      <>
         <Navbar/>
         <ContactTitle title={'Contact Us'}/>
         <ContactDetails/>
         <ContactMap/>
         <ContactForm/>
         <Footer/>
      </>
  )
}

export default Contact