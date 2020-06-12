

const initialState = {
    filter: "none"
};

const filter = (state = initialState, action)=>{
    switch (action.type){
        case "SET-FILTER":
            return {...state, filter: action.payload.filterValue};
        default:
            return state;
    }
}

export default filter;