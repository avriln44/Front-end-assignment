import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { CarList } from './CarList';


export const AddNewCar = () => {
    const [text, setText] = useState('');
    const [isElectronic, setIsElectronic] = useState(false);
    const { addCar, cars } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newCar = {
            id: Math.floor(Math.random() * 100000000),
            text,
            isElectronic
        };

        if (text === "") {
            alert("Please enter a car name!");
            return;
        }
        if (cars.some(car => car.text.toLowerCase() === text.toLowerCase())) {
            alert("This car already exists!");
            return;
        }
        else {
            addCar(newCar);
        }
    }

    return (
        <>
            <h3>Add a New Car</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Car Name</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                        placeholder="Enter a car name..." />
                </div>
                <div className="form-control">
                    <label htmlFor="isElectronic">Electronic</label>
                    <input type="checkbox" checked={isElectronic} onChange={(e) => setIsElectronic(e.target.checked)} />
                </div>
                <button className="btn">Add Car</button>
            </form>
            <CarList />
        </>
    )
}
