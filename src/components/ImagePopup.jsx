import React, { useEffect } from "react";

function ImagePopup({ clickedImg, handleRotationRight, handleRotationLeft, setClickedImg }) {

    const handleClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null);
            document.body.style.overflow = 'unset';
        }
    }

    useEffect(() => {
        if (clickedImg) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [clickedImg]);

    return <>
        <div className="overlayPhoto dismiss" onClick={(e) => { handleClick(e) }}>
            <img src={clickedImg} alt="Bigger Picture" />
            <span className="dismiss" onClick={(e) => { handleClick(e) }}>X</span>
            <div onClick={handleRotationLeft} className="overlayPhoto-arrows_left"><i class="fa-solid fa-arrow-left fa-xl"></i></div>
            <div onClick={handleRotationRight} className="overlayPhoto-arrows_right"><i class="fa-solid fa-arrow-right fa-xl"></i></div>
        </div>
    </>;


}

export default ImagePopup;