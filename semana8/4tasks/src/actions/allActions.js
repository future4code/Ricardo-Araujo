import axios from "axios";

export function getTasks(task){
    return{
    type: 'GET_TASKS',
    payload: {
        task: task
    }
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

//async functions

export const fetchTasks = () => async (dispatch, getState) => {
    const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/ricardo-hamilton/todos`
    );

    dispatch(getTasks(response.data.todos))
}

export const createTask = (taskText) => async (dispatch, getState) =>{
    const body = {
        text: taskText
    };
    const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/ricardo-hamilton/todos`,
        body);
    
    dispatch(fetchTasks());
}

export const taskDone = (id) => async (dispatch, getState) =>{
    const response = await axios.put(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/ricardo-hamilton/todos/${id}/toggle`
    )
    dispatch(fetchTasks());
}

export const deleteTask = (id) => async (dispatch, getState) =>{
    const response = await axios.delete(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/ricardo-hamilton/todos/${id}`
    )
    dispatch(fetchTasks());
}

export const deleteAllComplete = () => async (dispatch, getState) =>{
    const response = await axios.delete(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/ricardo-hamilton/todos/delete-done`
    )
    dispatch(fetchTasks());
}