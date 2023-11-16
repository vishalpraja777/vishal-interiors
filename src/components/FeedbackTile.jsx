import React from "react";

function FeedbackTile(props){

    return(
        <div className="feedbackTile">
        <h3>{props.feedbackDetail.heading}</h3>
        <p>{props.feedbackDetail.description}</p>
    </div>
    ) 
    

}

export default FeedbackTile;