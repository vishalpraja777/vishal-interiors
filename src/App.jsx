import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AboutUs from './pages/AboutUs'
import HomePage from './pages/HomePage'
import GetInTouch from './pages/GetInTouch'
import ContactInfo from './pages/ContactInfo'
import Protfolio from './pages/Protfolio'
import Services from './pages/Services'
import Navbar from './components/navbar'

function App() {

  return (
    <>
    <div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/contactinfo" element={<ContactInfo/>}/>
          <Route path="/getintouch" element={<GetInTouch/>}/>
          <Route exact path="/protfolio" element={<Protfolio/>}/>
          <Route exact path="/services" element={<Services/>}/>
        </Routes>
      </Router> */}
      <Navbar/>
      <HomePage/>
      <Services/>
      <Protfolio/>
      <AboutUs/>
      <GetInTouch/>
      <ContactInfo/>
    </div>
    </>
  )
}

export default App
