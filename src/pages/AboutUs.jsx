import React from "react";

function AboutUs(){

    return(
        <div id="aboutus" className="content">
        <div className="leftAbout">
            <h1>About Us</h1>
            <p>We, Vishal Interiors situated at Virgonagar, Bangalore, Karnataka, operates in the fields of interior
                 designing with a talented team of designers. We have successfully conceptualized and completed 
                 the interior designs of numerous residential, commercial projects as well as architectural projects. 
                 We have completed some of the finest designs with the help of our renowned designers.</p>
        </div>
        <div className="rightAbout">
            <img src={"/vishal-interiors/assets/chairs1.png"} alt="About Us Image" />
        </div>
    </div>
    ) 
    

}

export default AboutUs;