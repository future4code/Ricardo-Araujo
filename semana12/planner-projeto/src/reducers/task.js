const inicialState={
    taskList: {}
}

const task = (state = inicialState, action) =>{
    switch(action.type){
        case "SET_TASKS":{
            return{...state, taskList: action.payload.taskList}
        }
        default:
            return state;
    }
}

export default task;