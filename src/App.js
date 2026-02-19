import React from 'react'
import Home from './pages/Home'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';
import OurSolution from './pages/OurSolution';
import IndustriesWeServe from './pages/IndustriesWeServe';
import Infastructure from './pages/Infastructure';
import QualityAndCertification from './pages/QualityAndCertification';

const App = () => {
  return (
   <> 
       <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/IndustriesWeServe" element={<IndustriesWeServe/>} />
        <Route path="/OurSolution" element={<OurSolution/>} />
        <Route path="/Infastructure" element={<Infastructure/>} />
        <Route path="/QualityAndCertification" element={<QualityAndCertification/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer/>
    </Router>
   </>
  )
}

export default App