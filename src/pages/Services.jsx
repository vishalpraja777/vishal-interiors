import React from "react";
import ServiceTile from "../components/ServiceTile";

function Services(){

    const serviceDetails = [
        {
            heading: "Canteen Interior 1",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, magni.",
            imageLink: "src/assets/canteen.jpg"
        },
        {
            heading: "Canteen Interior 2",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, magni.",
            imageLink: "src/assets/canteen.jpg"
        },
        {
            heading: "Canteen Interior 3",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, magni.",
            imageLink: "src/assets/canteen.jpg"
        },
        {
            heading: "Canteen Interior 4",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, magni.",
            imageLink: "src/assets/canteen.jpg"
        },
        {
            heading: "Canteen Interior 5",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, magni.",
            imageLink: "src/assets/canteen.jpg"
        },
        {
            heading: "Canteen Interior 6",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, magni.",
            imageLink: "src/assets/canteen.jpg"
        },
        {
            heading: "Canteen Interior 7",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, magni.",
            imageLink: "src/assets/canteen.jpg"
        },
        {
            heading: "Canteen Interior 8",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, magni.",
            imageLink: "src/assets/canteen.jpg"
        }
    ]

    return(
        <div id="services" className="content">
        <div className="rowForServices">

            {serviceDetails.map((serviceDetail) => (
                <ServiceTile serviceDetail={serviceDetail}/>
            ))}
{/*             
            <div className="canteenInterior">
                <img src="src/assets/canteen.jpg" alt="CanteenInterior1" />
                <h3>Canteen Interior 1</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, magni.</p>
                <button className="serviceBtn">Enquire Now</button>
            </div>
            <div className="canteenInterior">
                <img src="src/assets/canteen.jpg" alt="CanteenInterior2" />
                <h3>Canteen Interior 2</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, magni.</p>
                <button className="serviceBtn">Enquire Now</button>
            </div>
            <div className="canteenInterior">
                <img src="src/assets/canteen.jpg" alt="CanteenInterior3" />
                <h3>Canteen Interior 3</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, magni.</p>
                <button className="serviceBtn">Enquire Now</button>
            </div>
            <div className="canteenInterior">
                <img src="src/assets/canteen.jpg" alt="CanteenInterior4" />
                <h3>Canteen Interior 4</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, magni.</p>
                <button className="serviceBtn">Enquire Now</button>
            </div> */}
        </div>
    </div>
    )
    

}

export default Services;