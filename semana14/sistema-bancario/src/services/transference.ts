import * as fs from "fs";
import {statement} from "../types";
import {errorMenssage, sucessMenssage} from "../menssages";
import {getAccountByCpf} from "./getAccountbyCPF";
import {writeInTheSystem} from "./writeInTheSystem";



export default function transference(nameOrigin: string, cpfOrigin: string, money: number, nameDestiny: string, cpfDestiny:string):void{

    const accountOrigin = getAccountByCpf(cpfOrigin);
    const accountDestiny = getAccountByCpf(cpfDestiny);

    if(accountOrigin===undefined || accountOrigin.name!==nameOrigin || 
        accountDestiny===undefined || accountDestiny.name!==nameDestiny){
        return console.log(errorMenssage.noAccount);
    };

    if(accountOrigin.balance<money){
        return console.log(errorMenssage.noBalance);
    };

    
    const accountsFile = require("../../data/accounts.json");
    const newFile = accountsFile.map(element=>{
        if(accountOrigin===element){

            const newStatement: statement={
                operation: "transference",
                data: money
            };

            element.balance-=money;
            element.statement.push(newStatement);
            return element;
            
        }else if(accountDestiny===element){

            const newStatement: statement={
                operation: "transference",
                data: money
            };

            element.balance+=money;
            element.statement.push(newStatement);
            return element;
        }else{
            return element;
        };
    });
    
    writeInTheSystem(newFile);

    return console.log(sucessMenssage.tranference);
};