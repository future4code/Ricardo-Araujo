export function createTask(text){
    return{
        type: 'CREATE_TASK',
        payload: {
            text: text,
            id: Date.now(),
            complete: false
        }
    }
}

export function deleteTask(id){
    return{
        type: 'DELETE_TASK',
        payload: {
            id: id
        }
    }
}

export function taskDone(id){
    return{
        type: 'TASK_DONE',
        payload: {
            id: id
        }
    }
}

export function completeAll(){
    return{
        type: 'COMPLETE_ALL', 
    }
}

export function deleteAllComplete(){
    return{
        type: 'DELETE_ALL_COMPLETE',
    }
}

export function setfilter(state){
    return{
        type: 'SET-FILTER',
        payload:{
            filterValue: state
        }
    }
}

