import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom';

const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/service' element={<Service />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
