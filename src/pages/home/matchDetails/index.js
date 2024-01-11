import React from "react";
import { useParams } from "react-router-dom";

function MatchDetails() {
    const { id } = useParams();
    // const selectedMatch = liveScore[id];
    // if (!selectedMatch) {
    //     return <div>Lodaing....</div>;
    // }
    return (
        <>
            <div>
                <h2>Match Details</h2>
                <h2>{id}</h2>
                
            </div>
        </>
    );
};

export default MatchDetails;