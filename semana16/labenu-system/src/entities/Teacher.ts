import {User} from "./User"; 
import { FileManager } from "./FileManager";

export class Teacher implements User{

    // public fileManager:FileManager = new FileManager("./data/teacher.json");

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public specialties: TEACHER_SPECIALTY[]
    ){
        this.id = id,
        this.name = name,
        this.email = email,
        this.specialties = specialties
    };
};


export enum TEACHER_SPECIALTY {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    OOP = "OOP",
    BACKEND = "BACKEND",
};