import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import GetInTouch from "./GetInTouch";

function Navbar() {

  const [showPopup, setShowPopup] = useState(false);

  
  const showPopUp = () => {
    setShowPopup(true);
}

const closePopup = () => {
    setShowPopup(false);
  };


  return (
    // <header className={`navbarHeader ${scrolled ? 'opaque' : 'transparent'}`}>
    <header className="navbarHeader">
      <div className="navbarMain">
        <nav className="navbarLogo">VISHAL INTERIORS</nav>
        <ul className="navbaList">
          <li><Link to="homepage" smooth={true} offset={0} duration={500}>Homepage</Link></li>
          <li><Link to="services" smooth={true} offset={0} duration={500}>Services</Link></li>
          <li><Link to="aboutus" smooth={true} offset={0} duration={500}>About Us</Link></li>
          <li><Link to="protfolio" smooth={true} offset={0} duration={500}>Protfolio</Link></li>
          <li><Link to="feedback" smooth={true} offset={0} duration={500}>Feedback</Link></li>
          <li><Link to="contactinfo" smooth={true} offset={0} duration={500}>Contact Us</Link></li>
          <li>
            <button className="btn" onClick={showPopUp}>
              Get Free Quotation
            </button>
          </li>
        </ul>
      </div>
      <GetInTouch show={showPopup}  closePopup={closePopup} text={"Get Quotation"}/>
    </header>
  )


}

export default Navbar;