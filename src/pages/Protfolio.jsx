import React, {useState} from "react";
import ProtfolioTile from "../components/ProtfolioTile";
import ProtfolioDetails from "../data/ProtfolioData";

function Protfolio() {

    const protfolioDetails = ProtfolioDetails;

    const itemsPerPage = 7;
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

    // const initialDisplayCount = 8; // Set the initial number of images to display
    // const [displayCount, setDisplayCount] = useState(initialDisplayCount);

    // const handleViewMore = () => {
    //     setDisplayCount(displayCount + 4); // Increase the display count on "View More" click
    // };

    // const handleViewLess = () => {
    //     setDisplayCount(8); // Increase the display count on "View More" click
    // };

    return (

        <div id="protfolio" className="content">
            <h1 className="protfolioHeading">Protfolio</h1>
            <p className="protfolioHeading">Here is a list of Images from our previous works</p>
            <div className="rowForprotfolio">
                {protfolioDetails.slice(startIndex, endIndex).map((protfolioDetail, index) => (
                    <ProtfolioTile key={index} protfolioDetail={protfolioDetail} />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="paginationButtons">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        &lt; Prev
                    </button>
                    <span>{`Page ${currentPage} of ${totalPages}`}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Next &gt;
                    </button>
                </div>
            )}
            
            {/* {displayCount < protfolioDetails.length && (
                <div className="viewMoreButton">
                    <button onClick={handleViewMore}>View More</button>
                </div>
            )}
            {displayCount >= protfolioDetails.length && (
                <div className="viewAllLink">
                    <Link to="/view-all">View All</Link>
                    <button onClick={handleViewLess}>View Less</button>
                </div>
            )} */}
        </div>

        // <div id="protfolio" className="content">
        //     <h1 className="protfolioHeading">Protfolio</h1>
        //     <p className="protfolioHeading">Here is a list of Images from our previous works</p>
        //     <div className="rowForprotfolio">
        //         {protfolioDetails.map((protfolioDetail) => (
        //             <ProtfolioTile protfolioDetail={protfolioDetail} />
        //         ))}
        //     </div>
        // </div>
    )


}

export default Protfolio;