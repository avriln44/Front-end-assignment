export default (state, action) => {
    switch (action.type) {
        case 'DELETE_Car':
            return {
                ...state,
                cars: state.cars.filter(car => car.id !== action.payload)
            }
        case 'ADD_Car':
            return {
                ...state,
                cars: [action.payload, ...state.cars]
            }

        case 'DELETE_Trip':
            return {
                ...state,
                trips: state.trips.filter(trip => trip.id !== action.payload)
            }
        case 'ADD_Trip':
            return {
                ...state,
                trips: [action.payload, ...state.trips]
            }

        default:
            return state;
    }
}