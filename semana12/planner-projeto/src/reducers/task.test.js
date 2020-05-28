import {setTasks} from "../actions/task"
import task from "./task"

describe("task reducer", ()=>{
    test("SET_TASKS", ()=>{
        //PREPARACAO
        const mockState = {taskList: {} };
        const mockTask = "Oi, eu sou uma nova tarefa"
        const mockAction = setTasks(mockTask);

        //EXECUCAO
        const newState = task(mockState, mockAction);

        //VERIFICACAO
        expect(newState.taskList).toBe(mockTask);
    })
    test("Defaul case",()=>{
        //preparacao
        const mockState = {
            taskList:"estado inicial"};

        const mockAction = {
            type: "CASO_DEFAULT",
        }

        //execucao
        const newState = task(mockState, mockAction);

        //verificao
        expect(newState.taskList).toBe(mockState.taskList)
    })
});