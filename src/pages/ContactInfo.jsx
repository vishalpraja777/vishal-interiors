import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from "sonner";

function ContactInfo() {

    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumberName] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        if(email == ''  && phoneNumber == ''){
            toast.error('Either Phone Number or Email should be filled');
            return;
        }

        if (validatePhoneNumber(phoneNumber) || phoneNumber == '') {
            emailjs.sendForm('service_n2wgssp', 'template_2tx8n1v', form.current, 'GN1SvDCgYcfoTFLTr')
                .then((result) => {
                    toast.success('Query Sent Successfully');
                    console.log(result.text);
                    document.getElementById("contactUsFrom").reset();
                }).catch((error) => {
                    toast.error('Error Sending Query');
                    console.log(error.text);
                    document.getElementById("contactUsFrom").reset();
                });
        } else{
            toast.error('Enter valid Phone Number');
            return;
        }

    };

    const validatePhoneNumber = (phoneNumber) => {
        const pattern = /[0-9]{10}/i

        phoneNumber = phoneNumber.split(" ").join("")

        if (phoneNumber.match(/^\+91/i) && phoneNumber.length == 13 && phoneNumber.match(/[0-9]{12}/i)) {
            return true
        }

        if (phoneNumber.match(/^0/i) && phoneNumber.length == 11 && phoneNumber.match(/[0-9]{11}/i)) {
            return true
        }

        if (phoneNumber.length == 10 && phoneNumber.match(pattern)) {
            return true
        }

        return false;
    }

    return (
        <div id="contactinfo" className="content2">
            <Toaster richColors />
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
                            <a href="mailto:purushothamprajapati@gmail.com">purushothamprajapati@gmail.com</a>
                            
                        </span>
                    </div>
                    <div className="contactInfo">
                        <i className="fas fa-phone icons"></i>
                        <span>
                            <h3>Call Us</h3>
                            <a href="tel:+919845328512">+91 9845328512</a>
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
                    <form ref={form} onSubmit={sendEmail} id="contactUsFrom">
                        <input type="text" name="name" placeholder="Enter Your Name" required onChange={e => setName(e.target.value)} />
                        <input type="email" name="email" placeholder="Enter Your Email" onChange={e => setEmail(e.target.value)} />
                        <input type="tel" name="number" placeholder="Enter Your contact number" onChange={e => setPhoneNumberName(e.target.value)} />
                        <textarea name="message" id="" rows="4" placeholder="Enter Your Message" onChange={e => setMessage(e.target.value)} ></textarea>
                        <button type="submit" className="feedback-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )


}

export default ContactInfo;