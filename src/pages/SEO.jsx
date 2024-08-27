import React from 'react'
import Navbar from '../component/Navbar'
import ContactTitle from '../component/ContactTitle'
import Footer from '../component/Footer'
import { Box } from '@chakra-ui/react';
import seoImg from '../assets/seo.jpg'
import ServicesDetail from '../component/ServicesDetail';
const serviceContent = [
    {
      image: seoImg,
      text: [
        "SEO is a means of optimizing your website so that you get organic (free) traffic from the search engines, improve brand awareness, and turn views and clicks into profits.",
        "It includes the process of expanding the quality and quantity of the traffic to your website using the organic search engine results.",
        "SEO can be complex and involves a number of variables such as the content on your site, On Page Optimization, and quality of links coming to your site from other trusted sources."
      ]
    }
  ];
  
function SEO() {
  return (
  <>
    <Navbar/>
    <ContactTitle title={'Search Engine optimaization'}/>
    <Box display={'flex'} justifyContent={'center'} margin={'20px'}>
         <ServicesDetail content={serviceContent}/>
    </Box>
    <Footer/>
  </>
  )
}

export default SEO