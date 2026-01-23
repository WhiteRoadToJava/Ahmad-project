import React from 'react'
import Navbar from '../component/homePage_element/Navbar.jsx'
import Header from '../component/homePage_element/Header.jsx'
import TopServices from '../component/homePage_element/TopServices.jsx'
import Hero from '../component/homePage_element/Hero.jsx'
import Footer from '../component/homePage_element/Footer.jsx'
import ContactForm from '../component/homePage_element/ContactForm.jsx'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <TopServices />
      <ContactForm />
      <Footer />

    </div>
  )
}

export default Home
