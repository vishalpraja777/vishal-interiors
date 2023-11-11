import React,{useState, useEffect} from "react";
import { Link } from "react-scroll";
import HomePage from "../pages/HomePage";

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
        <header className={`navbarHeader ${scrolled ? 'opaque' : 'transparent'}`}>
            <div className="navbarMain">
                <nav className="navbarLogo">Vishal Interiors</nav>
                <ul className="navbaList">
                    <li><Link to="homepage" smooth={true} offset={0} duration={500}>Homepage</Link></li>
                    <li><Link to="services" smooth={true} offset={0} duration={500}>services</Link></li>
                    <li><Link to="protfolio" smooth={true} offset={0} duration={500}>protfolio</Link></li>
                    <li><Link to="aboutus" smooth={true} offset={0} duration={500}>aboutus</Link></li>
                    <li><Link to="contactinfo" smooth={true} offset={0} duration={500}>contactinfo</Link></li>
                </ul>
            </div>
        </header>
    )


}

export default Navbar;