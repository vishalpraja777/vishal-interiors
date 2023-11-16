import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactInfo() {

    return (
        <div id="contactinfo" className="content">
            <h1>Contact Us</h1>
            <div className="contact-us">
                <div className="contact-leftcol">
                    <div>
                        {/* <FontAwesomeIcon icon="fa-solid fa-check-square" /> */}
                        <span>
                            <h3>Our Office Address</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </span>
                    </div>
                    <div>
                        {/* <FontAwesomeIcon icon="fa-duotone fa-lighthouse" /> */}
                        <span>
                            <h3>Email</h3>
                            <p>Lorem ipsum dolor sit.</p>
                        </span>
                    </div>
                    <div>
                        {/* <FontAwesomeIcon icon="fa-duotone fa-lighthouse" /> */}
                        <span>
                            <h3>Call Us</h3>
                            <p>Lorem, ipsum dolor.</p>
                        </span>
                    </div>
                    <div>
                        {/* <FontAwesomeIcon icon="fa-duotone fa-lighthouse" /> */}
                        <span>
                            <h3>Our Timing</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </span>
                    </div>
                </div>
                <div className="contact-rightcol">
                    <form action="">
                        <input type="text" name="name" placeholder="Enter Your Name" required />
                        <input type="email" name="email" placeholder="Enter Your Email" />
                        <input type="tel" name="number" placeholder="Enter Your contact number" required />
                        <textarea name="message" id="" rows="4" placeholder="Enter Your Message"></textarea>
                        <button type="submit" className="feedback-btn btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )


}

export default ContactInfo;