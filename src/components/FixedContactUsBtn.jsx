import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";


function FixedContactUsBtn() {

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
        <div id="fixedContactUsBtn">
            <button className="clsBtn"><i className="fa-solid fa-headset"></i></button>
            {scrolled? 
            <button className="scrollTop">
                <Link to="navbarHeader" smooth={true} offset={0} duration={500}><i className="fa-solid fa-circle-chevron-up"></i></Link>
            </button>
            :<div></div>
            }
        </div>
    )


}

export default FixedContactUsBtn;