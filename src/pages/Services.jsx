import React from "react";
import ServiceTile from "../components/ServiceTile";
import ServiceDetails from "../data/ServiceData";

function Services() {

    // console.log(ServiceDetails)

    const serviceDetails = ServiceDetails;

    return (
        <div id="services" className="content">
                <h1 className="servicesHeading">Services</h1>
                <p className="servicesHeading">Here is a list of services we offer</p>
                <div className="rowForServices">
                    {serviceDetails.map((serviceDetail) => (
                        <ServiceTile serviceDetail={serviceDetail} />
                    ))}
                </div>
        </div>
    )


}

export default Services;