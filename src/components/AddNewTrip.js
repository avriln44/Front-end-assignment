import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddNewTrip = () => {
    const { cars, addTrip } = useContext(GlobalContext);

    const [tripCarId, setTripCarId] = useState(0);
    const [refuellingLiters, setRefuellingLiters] = useState(0);
    const [refuellingCost, setRefuellingCost] = useState(0);
    const [distanceDrivenWithRefuelling, setDistanceDrivenWithRefuelling] = useState(0);

    const onSubmit = e => {
        e.preventDefault();

        const car = cars.find(car => car.id === tripCarId);

        const newTrip = {
            id: Math.floor(Math.random() * 100000000),
            tripCarId: tripCarId,
            tripCarName: car ? car.text : null,
            refuellingLiters,
            refuellingCost,
            distanceDrivenWithRefuelling
        }

        if (tripCarId === 0) {
            alert("Please select a car!");
            return;
        } else {
            addTrip(newTrip);
            alert("Trip added successfully!");
        }
    }


    return (
        <>
            <h3>Add new trip</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="tripCarId">Select the car</label>
                    <select value={tripCarId} onChange={(e) => setTripCarId(parseInt(e.target.value))}>
                        {cars.map(car => (
                            <option key={car.id} value={car.id}>
                                {car.text} {car.isElectronic ? '(Electronic)' : ''}</option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="refuellingLiters">Refuelling in liters</label>
                    <input type="text" value={refuellingLiters} onChange={(e) =>
                        setRefuellingLiters(e.target.value)} placeholder="Enter refuelling liters..." />
                </div>
                <div className="form-control">
                    <label htmlFor="refuellingCost">Refuelling cost in euros</label>
                    <input type="text" value={refuellingCost} onChange={(e) =>
                        setRefuellingCost(e.target.value)} placeholder="Enter refuelling cost..." />
                </div>
                <div className="form-control">
                    <label htmlFor="distanceDrivenWithRefuelling">Distance driven with refuelling</label>
                    <input type="text" value={distanceDrivenWithRefuelling} onChange={(e) =>
                        setDistanceDrivenWithRefuelling(e.target.value)} placeholder="Enter distance driven with refuelling..." />
                </div>
                <button className="btn">Add trip</button>
            </form>
        </>
    )
}
