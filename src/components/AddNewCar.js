import React from 'react';

import '../App.css';
import { addNewCar,displayCarList } from './carFunctions.js';


export function AddNewCar() {
    
    return (
        
        <div>
            <header>AddNewCar</header>
            <form>
                <label htmlFor="car-name">Car Name:</label>
                <input type="text" id="car-name" name="car-name"/>
            </form>
            
            <form>
                <label htmlFor="brand">brand:</label>
                <input type="text" id="brand" name="brand"/>
            </form>
            <form>
                <label htmlFor="color">color:</label>
                <input type="text" id="color" name="color"/>
            </form>
            <form>
                <label htmlFor="year">Year of manufacture:</label>
                <input type="number" id="year" name="year"/>
            </form>
            
                <button type="button" onClick={addNewCar}>add new Car</button>
                
            
            
                
                <button type="button" onClick={displayCarList}>Show car list</button>
            
           
        </div>
    )
}

export default AddNewCar;