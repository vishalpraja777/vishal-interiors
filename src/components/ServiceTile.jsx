import React from "react";

function ServiceTile(props) {

    // console.log(props)

    return (
        <div className="serviceTile">
            <img src={props.serviceDetail.imageLink} alt="Service Image" />
            <h3>{props.serviceDetail.heading}</h3>
            <p>{props.serviceDetail.description}</p>
            {/* <button className="serviceBtn">Enquire Now</button> */}
        </div>
    )


}

export default ServiceTile;