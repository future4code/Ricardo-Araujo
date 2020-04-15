

const initialState = {
    taskList: []
};

const task = (state = initialState, action)=>{
    switch (action.type){
        case "CREATE_TASK":
            return {...state, taskList:[...state.taskList, action.payload]};
        case "DELETE_TASK":{
            const newState = state.taskList.filter((task)=>{
                return (task.id !== action.payload.id)
            })
            return{...state, taskList: newState};
        }
        case "TASK_DONE":{
            const newState = state.taskList.map((task)=>{
                if(task.id === action.payload.id){
                    task.complete = !task.complete
                    return task;
                }else{
                    return task;
                }
            })
            return{...state, taskList: newState};
        }
        default:
            return state;
    }
}

export default task;