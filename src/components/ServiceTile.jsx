import React from "react";

function ServiceTile(props){

    console.log(props)

    return(
        <div className="canteenInterior">
        <img src={props.serviceDetail.imageLink} alt="CanteenInterior3" />
        <h3>{props.serviceDetail.heading}</h3>
        <p>{props.serviceDetail.description}</p>
        <button className="serviceBtn">Enquire Now</button>
    </div>
    ) 
    

}

export default ServiceTile;