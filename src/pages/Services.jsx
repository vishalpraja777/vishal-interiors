import React, { useState } from "react";
import ServiceTile from "../components/ServiceTile";
import ServiceDetails from "../data/ServiceData";
import GetInTouch from "../components/GetInTouch";

function Services() {

    // console.log(ServiceDetails)

    const serviceDetails = ServiceDetails;

    const [showPopup, setShowPopup] = useState(false);

    const [selectedService, setSelectedService] = useState('');

    const showPopUp = (e, serviceId) => {
        console.log(serviceId);
        setSelectedService(serviceId);
        setShowPopup(true);
    }

    const closePopup = () => {
        // setSelectedService('')
        setShowPopup(false);
      };

    return (
        <div id="services" className="content">
                <h1 className="servicesHeading">Services</h1>
                <p className="servicesHeading">Here is a list of services we offer</p>
                <div className="rowForServices">
                    {serviceDetails.map((serviceDetail) => (
                        <div key={serviceDetail.id} onClick={(e) => {showPopUp(e,serviceDetail.displayDescription)}}>
                        <ServiceTile serviceDetail={serviceDetail} />
                        </div>
                    ))}
                </div>
            <GetInTouch show={showPopup}  closePopup={closePopup} text={"Send Enquiry"} selectedService={selectedService}/>
        </div>
    )


}

export default Services;