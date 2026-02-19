import React from 'react'
import Hero from '../components/Hero/Hero'
import AboutUs from '../components/Aboutus/AboutUs'
import CoreCapabilities from '../components/CoreCapabilities/CoreCapabilities'
import Industry from '../components/Industry/Industry'
import InfrastructureShowcase from '../components/InfrastructureShowcase/InfrastructureShowcase'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
   <>
    <Hero/>
    <AboutUs/>
    <CoreCapabilities/>
    <Industry/>
    <InfrastructureShowcase/>
    <WhyChooseUs/>
    <Testimonials/>
   </>
  )
}

export default Home