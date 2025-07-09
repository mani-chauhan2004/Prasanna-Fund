import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <>
      <Navbar currentPath="/" />
      <Hero />
    </>
  )
}

export default page;