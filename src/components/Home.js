import React from 'react';
import { NumOfTrips } from './summary/NumOfTrips';
import { AvgConsumptionPer100KmLiters } from './summary/AvgConsumptionPer100KmLiters';

import '../App.css';


export function Home() {
    return (
        <div>
            <header>Car Fuel Expenses Tracker</header>

            <NumOfTrips />
            <AvgConsumptionPer100KmLiters />

            {/* 
            <Statistics />

                These will be in the statistics component:
                <TotalRefuellingExpenses />
                <TotalSumEuros />
                <TotalConsumptionLiters />
                <TotalDistanceKm />
                <AvgExpensesPer100KmEuros />
                <AvgConsumptionPer100KmLiters />

            */}
        </div>
    );
}

export default Home;