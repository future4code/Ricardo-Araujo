import {createTask, getTasks, setTasks} from "./task"
import axios from "axios";

describe("test action/task", ()=>{
    test("Criar uma task", async ()=>{
        //preparacao
        const mockBody = { text: "Oi, sou um texto",
                            day: "segunda-feira"}

        axios.post = jest.fn();
        const dispatch = jest.fn();
        window.alert = jest.fn()

        //execucao
        await createTask(mockBody)(dispatch);


        //verificacao
        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(axios.post).toHaveBeenCalledWith(
            `https://us-central1-missao-newton.cloudfunctions.net/generic/ricardo-hamilton`,mockBody)
        expect(alert).toHaveBeenCalledTimes(1)
    })

    test("Pegar task da API", async ()=>{
        //preparacao
        const mockTask = [{text: "eu sou uma tarefa", day:"quarta-feira"}];
        axios.get = jest.fn(async ()=>({
            data: mockTask
        }));
        const dispatch = jest.fn();

        //execucao
        await getTasks()(dispatch);

        //verificacao
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(
            `https://us-central1-missao-newton.cloudfunctions.net/generic/ricardo-hamilton`
        )
        expect(dispatch).toHaveBeenCalledWith({
            type: "SET_TASKS",
            payload:{
                taskList: mockTask
            }
        })
    })
});