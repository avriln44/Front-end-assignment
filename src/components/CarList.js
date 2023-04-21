import React, { useContext } from 'react';
import { Car } from './Cars';
import { GlobalContext } from '../context/GlobalState';

export const CarList = () => {
    const { cars } = useContext(GlobalContext);

    return (
        <>
            <h3>Cars</h3>
            <ul className="list">
                {cars
                    .filter((car) => car.id !== 0)  /* This will filter out the default car with id=0 */
                    .map((car) => (
                        <Car key={car.id} car={car} />
                    ))}
            </ul>
        </>
    );
}