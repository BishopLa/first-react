import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/HeroDrive/HeroDrive'
import Contact from '../../components/ContactUs/ContactUs'
import Welcome from '../../components/Welcome/Welcome'
import Services from '../../components/Services/Services'

const driving = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Welcome/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default driving