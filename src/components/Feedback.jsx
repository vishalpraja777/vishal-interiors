import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FeedbackDetails from "../data/FeedbackData";
import FeedbackTile from "./FeedbackTile";

function Feedback() {

    const feedbackDetails = FeedbackDetails;

    const images = [
        { url: "src/assets/canteen.jpg" },
        { url: "src/assets/chairs.jpg" },
        { url: "src/assets/kitchen.jpg" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000

    };

    return (
        <div id="feedback" className="content1">
            <div className="sideSpace"></div>
            <div className="slider-wrapper">
                <h2>Feedbacks</h2>
                <div className="slider">
                    <Slider {...settings}>
                        {feedbackDetails.map((feedbackDetail, index) => (
                            <FeedbackTile key={index} feedbackDetail={feedbackDetail} />
                        ))}
                    </Slider>
                </div>

                {/* <div>
                    <SimpleImageSlider
                        width={896}
                        height={504}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        autoPlay={true}
                    />
                </div> */}

                {/* <div className="slider">
                    <img id="slide-1" src="src/assets/canteen.jpg" alt="Canteen" />
                    <img id="slide-2" src="src/assets/chairs.jpg" alt="Chairs" />
                    <img id="slide-3" src="src/assets/kitchen.jpg" alt="Kitchen" />
                </div>

                <div className="slider-nav">
                    <a href="#slide-1"></a>
                    <a href="#slide-2"></a>
                    <a href="#slide-3"></a>
                </div> */}
            </div>
            <div className="sideSpace"></div>
        </div>
    )


}

export default Feedback;