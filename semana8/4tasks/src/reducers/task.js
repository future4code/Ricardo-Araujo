

const initialState = {
    taskList: []
};

const task = (state = initialState, action)=>{
    switch (action.type){
        case "GET_TASKS":
            return {...state, taskList: action.payload.task}
        default:
            return state;
    }
}

export default task;