import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Car = ({ car }) => {
    const { deleteCar } = useContext(GlobalContext);

    return (
        <li className={car.isElectronic ? 'car electronic' : 'car'}>
            {car.text} {car.isElectronic ? '(Electronic)' : ''}
            <button onClick={() => deleteCar(car.id)} className="delete-btn">x</button>
        </li>
    )
}