import { FileManager } from "../entities/FileManager";
import {Teacher} from "../entities/Teacher";


export class Teachers extends FileManager{

    protected filePath:string = "./data/teachers.json";
    protected arrayFile: Teacher[] = require( `../.${this.filePath}`);
    
    public addTeacher(newTeacher:Teacher):void{
        this.arrayFile.push(newTeacher);
    };
};

//Eu poderia ter deixado o add no próprio fileManager, mas ai eu não conseguiria,
//imperidir de fazer push de elementos que não fossem do tipo escolhido.