import { FileManager } from "../entities/FileManager";
import { Mission } from "../entities/Mission";


export class Missions extends FileManager{

    protected filePath:string = "./data/missions.json";
    protected arrayFile: Mission[] = require( `../.${this.filePath}`);
    
    public addMission(newMission:Mission):void{
        this.arrayFile.push(newMission);
    };
};

//Eu poderia ter deixado o add no próprio fileManager, mas ai eu não conseguiria,
//imperidir de fazer push de elementos que não fossem do tipo escolhido.