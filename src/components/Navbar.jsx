import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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
            <button className="btn">
              Get Free Quotation
            </button>
          </li>
        </ul>
      </div>
    </header>
  )


}

export default Navbar;