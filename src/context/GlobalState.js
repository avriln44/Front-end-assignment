import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    cars: [{ id: 0, text: "TestCar-DELETE"}],
    trips: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteCar(id) {
        dispatch({
            type: 'DELETE_Car',
            payload: id
        });
    }
    function addCar(car) {
        dispatch({
            type: 'ADD_Car',
            payload: car
        });
    }

    function deleteTrip(id) {
        dispatch({
            type: 'DELETE_Trip',
            payload: id
        });
    }
    function addTrip(trip) {
        dispatch({
            type: 'ADD_Trip',
            payload: trip
        });
    }

    return (<GlobalContext.Provider value={{
        cars: state.cars,
        deleteCar,
        addCar,

        trips: state.trips,
        deleteTrip,
        addTrip
    }}>
        {children}
    </GlobalContext.Provider>);
}
