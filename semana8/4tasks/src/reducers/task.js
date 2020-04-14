

const initialState = {
    taskList: []
};

const task = (state = initialState, action)=>{
    switch (action.type){
        case "CREATE_TASK":
            return {...state, taskList:[...state.taskList, action.payload]};
        case "DELETE_TASK":
            return{...state, taskList: "deletou"}
        default:
            return state;
    }
}

export default task;