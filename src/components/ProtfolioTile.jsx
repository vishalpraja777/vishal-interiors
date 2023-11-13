import React from "react";

function ProtfolioTile(props) {

    // console.log(props)

    return (
        <div className="protfolioTile">
            <img src={props.protfolioDetail.imageLink} alt="Protfolio Image" />
        </div>
    )


}

export default ProtfolioTile;