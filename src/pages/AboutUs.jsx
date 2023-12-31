import React from "react";

function AboutUs(){

    return(
        <div id="aboutus" className="content">
        <div className="leftAbout">
            <h1>About Us</h1>
            <p>We, Vishal Interiors situated at Bengaluru, Karnataka, operate in the fields of interior
                 decoration and designing. We have served in various loation across Bengaluru, Mysuru and few other cities in 
                 Andra Pradesh and Tamil Nadu. We are in this field for more than 30 years and have completed numerous projects
                 including Flats, Villas, Bungalow, Duplex, Office spaces and a lot more. The main services we offer are 
                 Carpentry and Furniture making, but also provide services in Painting and POP.
                 </p>
        </div>
        <div className="rightAbout">
            <img src={"/vishal-interiors/assets/chairs1.png"} alt="About Us Image" />
        </div>
    </div>
    ) 
    

}

export default AboutUs;