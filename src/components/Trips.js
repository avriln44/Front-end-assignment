import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Trip = ({ trip }) => {
    const { deleteTrip } = useContext(GlobalContext);

    return (
        <li className={trip.isElectronic ? 'trip electronic' : 'trip'}>
            {trip.isElectronic ? '(Electronic)' : ''}
            <table>
                <tbody>
                    <tr>
                        <td>Car:</td>
                        <td>{trip.tripCarName}</td>
                    </tr>
                    <tr>
                        <td>Refuelling liters:</td>
                        <td>{trip.refuellingLiters}</td>
                    </tr>
                    <tr>
                        <td>Refuelling cost:</td>
                        <td>{trip.refuellingCost} €</td>
                    </tr>
                    <tr>
                        <td>Distance driven with refuelling:</td>
                        <td>{trip.distanceDrivenWithRefuelling} km</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => deleteTrip(trip.id)} className="delete-btn">x</button>
        </li>
    )
}