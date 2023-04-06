import React, { useContext } from 'react';
import { Trip } from './Trips';
import { GlobalContext } from '../context/GlobalState';

export const TripList = () => {
    const { trips } = useContext(GlobalContext);

    return (
        <>
            <h3>Trips</h3>
            {trips.length > 0 ? (
                <ul>
                    {trips.map(trip => (<Trip key={trip.id} trip={trip} />))}
                </ul>
            ) : (
                <h5>There are no trips.</h5>
            )}
        </>
    )
}

