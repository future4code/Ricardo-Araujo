import * as fs from "fs";
import { statement} from "../types"
import {errorMensage} from "../errorMensages"

const accountsFile = require("../../data/accounts.json");

export default function addBalance(name: string, cpf: string, money: number):void{
    const findCPF = accountsFile.find((account)=>{
        return account.cpf === cpf
    })

    if(findCPF!==undefined && findCPF.name===name){
        
        const neWFile = accountsFile.map(element=>{
            if(findCPF===element){

                const newStatement: statement={
                    operation: "addBalance",
                    data: money
                };
    
                element.balance+=money;
                element.statement.push(newStatement);
                return element;
            }else{
                return element;
            }
        })

        fs.writeFileSync(`data/accounts.json`, JSON.stringify(neWFile));
        return console.log("valor adicionado com sucesso!");
    }else{
        return console.log(errorMensage);
    }
}