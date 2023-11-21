import React, {useEffect} from "react";

function GetInTouch({ show, closePopup, text}) {

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [show]);

    return (

        show ?
            <div id="getintouch">
                <div className="overlay">
                    <div className="popup">
                        <h2>{text}</h2>
                        <button onClick={closePopup} className="closeBtn"><i className="fa-solid fa-x"></i></button>
                        <form>
                        <input type="text" name="name" placeholder="Enter Your Name" required />
                        <input type="email" name="email" placeholder="Enter Your Email" />
                        <input type="tel" name="number" placeholder="Enter Your contact number" required />
                        <textarea name="message" id="" rows="4" placeholder="Enter Your Message"></textarea>
                        <button type="submit" className="feedback-btn">{text}</button>
                        </form>
                    </div>
                </div>
            </div>
            :
            <div></div>
    )


}

export default GetInTouch;