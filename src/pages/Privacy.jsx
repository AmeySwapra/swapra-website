import React from 'react'
import Navbar from '../component/Navbar'
import ContactTitle from '../component/ContactTitle'
import PrivacyPolicy from '../component/PrivacyPolicy'
import Footer from '../component/Footer'
function Privacy() {
  return (
    <>
      <Navbar/>
      <ContactTitle title={'Privacy Policy'}/>
      <PrivacyPolicy/>
      <Footer/>
    </>
  )
}

export default Privacy