import React, { useRef, useEffect } from "react";
// import SendEmail from "../email/SendEmail";
import emailjs from '@emailjs/browser';

import { Toaster, toast } from "sonner";

function GetInTouch({ show, closePopup, text }) {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

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
    };

    useEffect(() => {
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
                            <input type="text" name="name" placeholder="Enter Your Name" required />
                            <input type="email" name="email" placeholder="Enter Your Email" />
                            <input type="tel" name="number" placeholder="Enter Your contact number" required />
                            <textarea name="message" id="" rows="4" placeholder="Enter Your Message"></textarea>
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