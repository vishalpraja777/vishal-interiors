import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import GetInTouch from "./GetInTouch";


function FixedContactUsBtn() {

    const [scrolled, setScrolled] = useState(false);

    const [showPopup, setShowPopup] = useState(false);

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

    const showPopUp = () => {
        setShowPopup(true);
    }

    const closePopup = () => {
        setShowPopup(false);
      };

    return (
        <div id="fixedContactUsBtn">
            <button className="clsBtn" onClick={showPopUp}><i className="fa-solid fa-headset"></i></button>
            {scrolled? 
            <button className="scrollTop">
                <Link to="navbarHeader" smooth={true} offset={0} duration={500}><i className="fa-solid fa-circle-chevron-up"></i></Link>
            </button>
            :<div></div>
            }
            <GetInTouch show={showPopup}  closePopup={closePopup} text={"Send Enquiry"}/>
        </div>
    )


}

export default FixedContactUsBtn;