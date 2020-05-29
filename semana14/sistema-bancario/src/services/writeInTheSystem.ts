import * as fs from "fs";
import {sucessMenssage, errorMenssage} from "../menssages";


export function writeInTheSystem(newFile:any):void{
    try{
        fs.writeFileSync(`data/accounts.json`, JSON.stringify(newFile));
        return console.log(sucessMenssage.write);
        
    }catch(error){
            console.log(errorMenssage.write);
        return console.error(error);
    };
};
