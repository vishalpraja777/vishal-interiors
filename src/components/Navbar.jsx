import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import GetInTouch from "./GetInTouch";

function Navbar() {

  const [showPopup, setShowPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);


  const showPopUp = () => {
    setShowPopup(true);
  }

  const closePopup = () => {
    setShowPopup(false);
  };

  const showMenuToggle = () => {
    if(showMenu){
      // document.body.style.overflow = 'unset';
      setShowMenu(false);
    } else{
      // document.body.style.overflow = 'hidden';
      setShowMenu(true);
    }
  }


  return (
    // <header className={`navbarHeader ${scrolled ? 'opaque' : 'transparent'}`}>
    <header className="navbarHeader">
      <div className="navbarMain">


        <nav className="navbarLogo">
          <div className="navLeft">
            <img src="/vishal-interiors/vilogo.png" alt="logo" className="logoImg"/>
            <div>VISHAL INTERIORS</div>
          </div>
          <div className="navRight">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkBtn" onClick={showMenuToggle}>
              <i className="fa-solid fa-bars"></i>
            </label>
          </div>
        </nav>


        <ul className="navbaList" style={{'right' : `${showMenu ? '0%' : '-100%' }`}}>
          <li><Link to="homepage" smooth={true} offset={0} duration={500} onClick={showMenuToggle}>Homepage</Link></li>
          <li><Link to="services" smooth={true} offset={0} duration={500} onClick={showMenuToggle}>Services</Link></li>
          <li><Link to="aboutus" smooth={true} offset={0} duration={500} onClick={showMenuToggle}>About Us</Link></li>
          <li><Link to="protfolio" smooth={true} offset={0} duration={500} onClick={showMenuToggle}>Protfolio</Link></li>
          <li><Link to="feedback" smooth={true} offset={0} duration={500} onClick={showMenuToggle}>Feedback</Link></li>
          <li><Link to="contactinfo" smooth={true} offset={0} duration={500} onClick={showMenuToggle}>Contact Us</Link></li>
          <li>
            <button className="btn" onClick={showPopUp}>
              Get Free Quotation
            </button>
          </li>
        </ul>
      </div>
      <GetInTouch show={showPopup} closePopup={closePopup} text={"Get Quotation"} />
    </header>
  )


}

export default Navbar;