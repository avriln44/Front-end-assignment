import React, { useContext } from "react";
import { GlobalContext } from '../../context/GlobalState';

export const AvgConsumptionPer100KmLiters = () => {
    const { trips } = useContext(GlobalContext);

    const totalLiters = trips.reduce((acc, trip) => (acc += trip.refuellingLiters), 0);
    const totalDistance = trips.reduce((acc, trip) => (acc += trip.distanceDrivenWithRefuelling), 0);

    const avgConsumptionPer100KmLiters = (totalLiters / totalDistance) * 100;

    const totalkWh = trips.reduce((acc, trip) => (acc += trip.RechargingInkWh), 0);
    const totalDistanceE = trips.reduce((acc, trip) => (acc += trip.distanceDrivenWithCharging), 0);

    const avgConsumptionPer100KmkWh = (totalkWh / totalDistanceE) * 100;

    return (
        <>
            <br />
            <>Average consumption per 100 km in liters</>
            <h1 id="avgConsumptionPer100KmLiters">{avgConsumptionPer100KmLiters.toFixed(2)} Km/l</h1>

            <br />
            <>Average consumption per 100 km in kWh</>
            <h1 id="avgConsumptionPer100KmkWh">{avgConsumptionPer100KmkWh.toFixed(2)} kWh</h1>
        </>
    );
}
