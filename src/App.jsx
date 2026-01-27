
import {  Routes, Route,} from "react-router-dom";
import React from 'react'
import './App.css'
import Home from './pages/Home'
import './styles/variables.css'
import ContactUs from './pages/ContactUs'
import Navbar from "./component/homePage_element/Navbar";
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        
      </Routes>
    </>
  )
}

export default App
