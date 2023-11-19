import React from "react";
import { Link } from "react-scroll";


function Footer() {

    return (
        <div id="footer">
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <p><i className="fas fa-map-marker-alt icon-blue"></i> Bangalore - 560049</p>
                        <p><i className="far fa-envelope icon-blue"></i> Email: purushothamprajapati@gmail.com</p>
                        <p><i className="fas fa-phone icon-blue"></i> Phone: +91 9845328512</p>
                    </div>

                    <div className="footer-section">
                        <h4>Navigation</h4>
                        <ul>
                            <li><Link to="homepage" smooth={true} offset={0} duration={500}>Home</Link></li>
                            <li><Link to="services" smooth={true} offset={0} duration={500}>Services</Link></li>
                            <li><Link to="aboutus" smooth={true} offset={0} duration={500}>About Us</Link></li>
                            <li><Link to="protfolio" smooth={true} offset={0} duration={500}>Protfolio</Link></li>
                            <li><Link to="feedback" smooth={true} offset={0} duration={500}>Feedback</Link></li>
                            <li><Link to="contactinfo" smooth={true} offset={0} duration={500}>Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Social Media</h4>
                        <ul className="social-icons">
                            <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href=""><i className="fab fa-twitter"></i></a></li>
                            <li><a href=""><i className="fab fa-instagram"></i></a></li>
                            <li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Vishal Interiors. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )


}

export default Footer;