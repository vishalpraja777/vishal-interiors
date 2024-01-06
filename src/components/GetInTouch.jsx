import React, { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

import { Toaster, toast } from "sonner";

function GetInTouch({ show, closePopup, text, selectedService }) {

    const [descriptionMsg, setDescriptionMsg] = useState(selectedService);

    if (selectedService != null) {

    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumberName] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (email == '' && phoneNumber == '') {
            toast.error('Either Phone Number or Email should be filled');
            return;
        }

        if (validatePhoneNumber(phoneNumber) || phoneNumber == '') {
            emailjs.sendForm('service_n2wgssp', 'template_2tx8n1v', form.current, 'GN1SvDCgYcfoTFLTr')
                .then((result) => {
                    // toast.success('Query Sent Successfully')
                    setTimeout(() => {
                        closePopup();
                    }, 3000);
                    // closePopup();
                    console.log(result.text);
                }).catch((error) => {
                    // toast.error('Error Sending Query')
                    // closePopup();
                    setTimeout(() => {
                        closePopup();
                    }, 3000);
                    console.log(error.text);
                });
            // closePopup();
            toast.success('Query Sent Successfully')
        } else {
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

    useEffect(() => {
        setDescriptionMsg(selectedService)
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [show]);

    return (

        show ?
            <div id="getintouch">
                <Toaster richColors />
                <div className="overlay">
                    <div className="popup">
                        <h2>{text}</h2>
                        <button onClick={closePopup} className="closeBtn"><i className="fa-solid fa-x"></i></button>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="name" placeholder="Enter Your Name" required onChange={e => setName(e.target.value)} />
                            <input type="email" name="email" placeholder="Enter Your Email" onChange={e => setEmail(e.target.value)} />
                            <input type="tel" name="number" placeholder="Enter Your contact number" onChange={e => setPhoneNumberName(e.target.value)} />

                            <textarea name="message" id="" rows="4" placeholder="Enter Your Message"
                                value={descriptionMsg}
                                onChange={e => setDescriptionMsg(e.target.value)}>

                            </textarea>
                            <button type="submit" className="feedback-btn">{text}</button>
                        </form>
                    </div>
                </div>
            </div>
            :
            <div></div>
    )


}

export default GetInTouch;