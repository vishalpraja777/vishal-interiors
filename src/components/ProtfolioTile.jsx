import React, { useState }  from "react";
import ImagePopup from "./ImagePopup";

function ProtfolioTile(props) {

    // console.log(props)

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    return (
        <div className="protfolioTile" onClick={openModal}>
            <img src={props.protfolioDetail.imageLink} alt="Protfolio Image" />
            {/* <ImagePopup show={showModal}  closePopup={closeModal} imgUrl={props.protfolioDetail.imageLink} /> */}
            {/* {showModal && (
                <ImagePopup
                    show={showModal}
                    closePopup={closeModal}
                    imgUrl={props.protfolioDetail.imageLink}
                />
            )} */}
        </div>
    )


}

export default ProtfolioTile;