import React from 'react'
import Navbar from '../component/Navbar'
import ContactTitle from '../component/ContactTitle'
import { Box } from '@chakra-ui/react'
import ServicesDetail from '../component/ServicesDetail'
import Footer from '../component/Footer'
import digitalImg from '../assets/media.jpg'
const serviceContent = [
    {
      image: digitalImg,
      text: [
        "We are a leading Digital Marketing agency that specializes in helping businesses grow their online presence. In today's competitive landscape, having a robust digital strategy is essential to reach your target audience and drive conversions.",
        "Our team of digital marketing experts works closely with you to develop customized strategies that encompass all aspects of online marketing, from SEO and PPC to social media and content marketing, ensuring that your brand stands out in the digital world."
      ]
    },
  ];
  
function Digital() {
  return (
    <>
      <Navbar/>
      <ContactTitle title={'Digital Markeing'}/>
      <Box display={'flex'} justifyContent={'center'} margin={'20px'}>
         <ServicesDetail content={serviceContent}/>
      </Box>
      <Footer/>
    
    </>
  )
}

export default Digital