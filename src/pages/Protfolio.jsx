import React, { useState } from "react";
import ProtfolioTile from "../components/ProtfolioTile";
import ProtfolioDetails from "../data/ProtfolioData";
import ImagePopup from "../components/ImagePopup";

function Protfolio() {

    const protfolioDetails = ProtfolioDetails;

    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(protfolioDetails.length / itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (protfolioDetail, index) => {
        setCurrentIndex(index);
        setClickedImg(protfolioDetail.imageLink);
    }

    const handleRotationRight = () => {
        const totalLength = ProtfolioDetails.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = protfolioDetails[0].imageLink;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = protfolioDetails.filter((item) => {
            return protfolioDetails.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].imageLink;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    }

    const handleRotationLeft = () => {
        const totalLength = ProtfolioDetails.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = protfolioDetails[totalLength - 1].imageLink;
            setClickedImg(newUrl);
            // return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = protfolioDetails.filter((item) => {
            return protfolioDetails.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].imageLink;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    }

    return (

        <div id="protfolio" className="content">
            <h1 className="protfolioHeading">Protfolio</h1>
            <p className="protfolioHeading">Here is a list of Images from our previous works</p>

            <div className="photoContainer">
                <button onClick={handlePrevPage} disabled={currentPage === 1} className="protfolioButton">
                    <i className="fa-solid fa-arrow-left fa-xl"></i>
                </button>
                <div className="rowForprotfolio">

                    {protfolioDetails.slice(startIndex, endIndex).map((protfolioDetail, index) => (
                        <div key={index} className="protfolioTile" onClick={() => handleClick(protfolioDetail, index)}>
                            <img src={protfolioDetail.imageLink} alt="Protfolio Image" />
                        </div>
                        // <ProtfolioTile key={index} protfolioDetail={protfolioDetail} onClick={() => handleClick(protfolioDetail, index)} />
                    ))}

                </div>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className="protfolioButton">
                    <i className="fa-solid fa-arrow-right fa-xl"></i>
                </button>
            </div>

            {totalPages > 1 && (
                <div className="paginationButtons">

                    <span>{`Page ${currentPage} of ${totalPages}`}</span>

                </div>
            )}
            {clickedImg && (
                <ImagePopup
                    clickedImg={clickedImg}
                    handleRotationRight={handleRotationRight}
                    handleRotationLeft={handleRotationLeft}
                    setClickedImg={setClickedImg}
                />
            )}
        </div>
    )


}

export default Protfolio;