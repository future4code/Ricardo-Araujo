const inicialState = {
    trips: [],
    selectedTrip: "",
    details: ""
};

const trips = (state = inicialState, action) =>{
    switch (action.type){
        case "GET_TRIPS":{
            return{...state, trips: action.payload.trips}
        }
        case "SET_TRIP":{
            return{...state, selectedTrip: action.payload.tripId}
        }
        case "SET_TRIP_DETAIL":{
            return {...state, details: action.payload.details}
        }
        default:
            return state;
    }
}

export default trips;