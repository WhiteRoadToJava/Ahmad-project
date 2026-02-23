
import {  Routes, Route,} from "react-router-dom";
import React from 'react'
import './App.css'
import Home from './pages/Home'
import './styles/variables.css'
import ContactUs from './pages/ContactUs'
import Navbar from "./component/homePage_element/Navbar";
import Services from "./pages/Services";
import About from "./pages/About";
import PrivacyPolicy from "./component/PrivacyPolicy";
import Impressum from "./component/Imprint";
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/imprint" element={<Impressum />} />
      </Routes>
    </>
  )
}

export default App;
