const inicialState = {
    trips: []
};

const trips = (state = inicialState, action) =>{
    switch (action.type){
        case "GET_TRIPS":{
            return{...state, trips: action.payload.trips}
        }
        default:
            return state;
    }
}

export default trips;