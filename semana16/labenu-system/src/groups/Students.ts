import { Student } from "../entities/Student";
import { FileManager } from "../entities/FileManager";

export class Students extends FileManager{

    protected filePath:string = "./data/students.json";
    protected arrayFile:Student[] = require( `../.${this.filePath}`);;

    public addStudent(newStudent:Student):void{
        this.arrayFile.push(newStudent);
    };
};

//Eu poderia ter deixado o add no próprio fileManager, mas ai eu não conseguiria,
//imperidir de fazer push de elementos que não fossem do tipo escolhido.
