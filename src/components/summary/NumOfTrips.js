import React, { useContext } from "react";
import { GlobalContext } from '../../context/GlobalState';

export const NumOfTrips = () => {
    const { trips } = useContext(GlobalContext);

    const numOfTrips = trips.length;

    return (
        <>
            <br />
            <>Number of trips</>
            <h1 id="numOfTrips">{numOfTrips}</h1>
        </>
    );
}