import React from 'react'
import Navbar from '../component/Navbar'
import ContactTitle from '../component/ContactTitle'
import ServicesDetail from '../component/ServicesDetail';
import softImage from '../assets/software.jpg'
import Footer from '../component/Footer'
import { Box } from '@chakra-ui/react';

const serviceContent = [
    {
      image: softImage,
      text: [
        "We are a specialist Web Designing company with the focus and expertise to translate your business objectives into a successful web solution. A website gives you an opportunity to communicate with prospective clients. A website should provide essential details on the services offered by a company and most importantly, be able to hold the attention of visitors for long.",
        "Our team of highly skilled web designers works closely with you to thoroughly understand your mindset and deliver pages that fulfill all the criteria mentioned below:"
      ]
    },
    
  ];
  

function AppDevelopment() {
  return (
    <>
      <Navbar/>
      <ContactTitle title={'Software Development'}/>
      <Box display={'flex'} justifyContent={'center'} margin={'20px'}>
         <ServicesDetail content={serviceContent}/>
      </Box>
      <Footer/>
    </>
  )
}

export default AppDevelopment