import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactInfo() {

    return (
        <div id="contactinfo" className="content2">
            <h1>Contact Us</h1>
            <div className="contact-us">
                <div className="contact-leftcol">
                    {/* <div>
                        <i className="fas fa-map-marker-alt icons"></i>
                        <span>
                            <h3>Our Office Address</h3>
                            <p>Bangalore - 560049</p>
                        </span>
                    </div> */}
                    <div className="contactInfo">
                        <i className="far fa-envelope icons"></i>
                        <span>
                            <h3>Email</h3>
                            <p>purushothamprajapati@gmail.com</p>
                        </span>
                    </div>
                    <div className="contactInfo">
                        <i className="fas fa-phone icons"></i>
                        <span>
                            <h3>Call Us</h3>
                            <p>+91 9845328512</p>
                        </span>
                    </div>
                    <div className="contactInfo">
                        <i className="far fa-clock icons"></i>
                        <span>
                            <h3>Our Timing</h3>
                            <p>Open 24hrs</p>
                        </span>
                    </div>
                    {/* <div className="footer-section">
                    <span  style={{marginLeft:"40px"}}>
                        <h3>Social Media</h3>
                        <ul className="social-icons" style={{marginLeft:"-10px"}}>
                            <li><a href=""><i className="fab fa-facebook-f icons"></i></a></li>
                            <li><a href=""><i className="fab fa-twitter icons"></i></a></li>
                            <li><a href=""><i className="fab fa-instagram icons"></i></a></li>
                            <li><a href=""><i className="fab fa-linkedin-in icons"></i></a></li>
                        </ul>
                        </span>
                    </div> */}
                </div>
                <div className="contact-rightcol">
                    <form action="">
                        <input type="text" name="name" placeholder="Enter Your Name" required />
                        <input type="email" name="email" placeholder="Enter Your Email" />
                        <input type="tel" name="number" placeholder="Enter Your contact number" required />
                        <textarea name="message" id="" rows="4" placeholder="Enter Your Message"></textarea>
                        <button type="submit" className="feedback-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )


}

export default ContactInfo;