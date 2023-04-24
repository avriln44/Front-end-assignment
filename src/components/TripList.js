import React, { useState, useContext } from 'react';
import { Trip } from './Trips';
import { Car } from './Cars';
import { GlobalContext } from '../context/GlobalState';

export const TripList = () => {
    const { trips } = useContext(GlobalContext);
    const { cars } = useContext(GlobalContext);

    const [showAll, setShowAll] = useState(false);
    const [showAllByCar, setShowAllByCar] = useState({});

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const toggleShowAllForCar = (carId) => {
        setShowAllByCar({
            ...showAllByCar,
            [carId]: !showAllByCar[carId],
        });
    };

    return (
        <>
            <h3>Trips for all cars: {trips.length}</h3>
            {trips.length > 0 ? (
                <ul className="list">
                    {(showAll ? trips : trips.slice(0, 3)).map(trip => (
                        <Trip key={trip.id} trip={trip} />
                    ))}
                </ul>
            ) : (
                <h5>There are no trips.</h5>
            )}
            {trips.length > 3 && (
                <button className="btn" onClick={toggleShowAll}>{showAll ? 'Show less' : 'Show all'}</button>
            )}

            <h3>Trips by car</h3>
            {trips.length > 0 ? (
                <div>
                    {cars
                        .filter((car) => car.id !== 0)
                        .map((car) => (
                            <>
                                <Car key={car.id} car={car} />
                                <ul className="list">
                                    {(showAllByCar[car.id]
                                        ? trips.filter(trip => trip.tripCarId === car.id)
                                        : trips.filter(trip => trip.tripCarId === car.id).slice(0, 0)
                                    ).map(filteredTrip => (
                                        <Trip key={filteredTrip.id} trip={filteredTrip} />
                                    ))}
                                </ul>
                                {trips.filter(trip => trip.tripCarId === car.id).length > 0 && (
                                    <button className="btn" onClick={() => toggleShowAllForCar(car.id)}>
                                        {showAllByCar[car.id] ? 'Hide trips' : 'Show trips'}
                                    </button>
                                )}
                            </>
                        ))}
                </div>
            ) : (
                <h5>There are no cars.</h5>
            )}
        </>
    );
};
