import React from 'react'
import Navbar from '../component/Navbar'
import ContactTitle from '../component/ContactTitle'
import Sidebar from '../component/Sidebar'
import ServicesDetail from '../component/ServicesDetail';
import webImage from '../assets/web_design.jpg'
import { Box } from '@chakra-ui/react';
import Footer from '../component/Footer'
const services = [
    "Clean, Innovative and user friendly design",
    "Expertise team",
    "Search engine friendly",
    "Visually appealing and catches the attention of your target audience",
    "Easy to navigate",
    "Matches the theme of your product/service",
    "Cross browser compatibility",
    "Responsive Layout"
  ];

  const serviceContent = [
    {
      image: webImage,
      text: [
        "We are a specialist Web Designing company with the focus and expertise to translate your business objectives into a successful web solution. A website gives you an opportunity to communicate with prospective clients. A website should provide essential details on the services offered by a company and most importantly, be able to hold the attention of visitors for long.",
        "Our team of highly skilled web designers works closely with you to thoroughly understand your mindset and deliver pages that fulfill all the criteria mentioned below:"
      ]
    },
    
  ];
  

function WebDevelopment() {
  return (
    <>
     <Navbar/>
     <ContactTitle title={'Web Development'}/>
     <Box display='flex' fontSize={'15px'}>
        <Sidebar items={services}/>
        <ServicesDetail content={serviceContent}/>
     </Box>
     <Footer/>
    </>
  )
}

export default WebDevelopment