import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Trip = ({ trip }) => {
    const { deleteTrip } = useContext(GlobalContext);

    return (
        <li>
            <table>
                <tbody>
                    <tr>
                        <td>Car:</td>
                        <td>{trip.tripCarName}</td>
                    </tr>
                    <tr>
                        <td>Refuelling liters:</td>
                        <td>{trip.refuellingLiters} liters</td>
                    </tr>
                    <tr>
                        <td>Refuelling cost:</td>
                        <td>{trip.refuellingCost} €</td>
                    </tr>
                    <tr>
                        <td>Distance driven with refuelling:</td>
                        <td>{trip.distanceDrivenWithRefuelling} km</td>
                    </tr>
                    <tr>
                        <td>Recharging in Kwh:</td>
                        <td>{trip.RechargingInkWh} kWh</td>
                    </tr>
                    <tr>
                        <td>Charging cost:</td>
                        <td>{trip.ChargingCost} €</td>
                    </tr>
                    <tr>
                        <td>Distance driven with charging:</td>
                        <td>{trip.distanceDrivenWithCharging} km</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => deleteTrip(trip.id)} className="delete-btn">x</button>
        </li>
    )
}