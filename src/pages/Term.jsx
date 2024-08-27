import React from 'react'
import Navbar from '../component/Navbar'
import ContactTitle from '../component/ContactTitle'
import TermsAndConditions from '../component/TermsansConditions'
import Footer from '../component/Footer'
function Term() {
  return (
    <>
      <Navbar/>
      <ContactTitle title={'Terms and Condition'}/>
      <TermsAndConditions/>
      <Footer/>
    </>
  )
}

export default Term