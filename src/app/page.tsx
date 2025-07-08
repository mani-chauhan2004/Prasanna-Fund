import React from 'react'
import Hero from '../components/Hero'
import LogoCarousel from '../components/LogoCarousel'
import WhyFoundersPickUs from '../components/WhyFoundersPickUs'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <>
      <Navbar currentPath="/" />
      <Hero />
      <LogoCarousel />
      <WhyFoundersPickUs />
    </>
  )
}

export default page;