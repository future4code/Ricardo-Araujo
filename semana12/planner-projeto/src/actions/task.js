import axios from "axios";

export function setTasks(tasksFromApi){
    return{
        type: 'SET_TASKS',
        payload:{
            taskList: tasksFromApi
        }
    }
}

export const getTasks = () => async (dispatch) =>{
    const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/generic/ricardo-hamilton`);

    dispatch(setTasks(response.data));
}

export const createTask = (body) => async (dispatch) =>{
    try{
        await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/generic/ricardo-hamilton`,body)

        alert("Tarefa criada com sucesso")
        dispatch(getTasks);
    }catch(error){
        alert("Erro ao criar a tarefa!")
    }
}