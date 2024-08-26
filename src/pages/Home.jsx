import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import About from '../component/About'
import CounterSection from '../component/Counter'
import ServicesSection from '../component/Service'
import Bussiness from '../component/Bussiness'
import Project from '../component/Project'
import TechStack from '../component/TechStack'
import Footer from '../component/Footer'
function Home() {
  return (
    <>
        <Navbar/>
        <Banner />
        <About/>
        <CounterSection/>
        <ServicesSection/>
        <Bussiness/>
        <Project/>
        <TechStack/>
        <Footer/>
    </>
  )
}

export default Home