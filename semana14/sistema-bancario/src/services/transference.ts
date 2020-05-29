import * as fs from "fs";
import {statement} from "../types";
import {errorMenssage} from "../menssages";

const accountsFile = require("../../data/accounts.json");


export default function transference(nameOrigin: string, cpfOrigin: string, money: number, nameDestiny: string, cpfDestiny:string):void{

    const findCPFOrigin = accountsFile.find((account)=>{
        return account.cpf === cpfOrigin
    });

    const findCPFDestiny = accountsFile.find((account)=>{
        return account.cpf === cpfDestiny
    });

    if(findCPFOrigin!==undefined && findCPFDestiny!==undefined){
        
        if(findCPFOrigin.name === nameOrigin && findCPFDestiny.name === nameDestiny){

            if(findCPFOrigin.balance>=money){

                const neWFile = accountsFile.map(element=>{
                    if(findCPFOrigin===element){
    
                        const newStatement: statement={
                            operation: "transference",
                            data: money
                        }
            
                        element.balance-=money;
                        element.statement.push(newStatement);
                        return element;
                        
                    }else if(findCPFDestiny===element){

                        const newStatement: statement={
                            operation: "transference",
                            data: money
                        }
            
                        element.balance+=money;
                        element.statement.push(newStatement);
                        return element;
                    }else{
                        return element;
                    }
                });
                
                fs.writeFileSync(`data/accounts.json`, JSON.stringify(neWFile));
                return console.log("Transferencia realizada com sucesso")
                

            }else{
                return console.log("Saldo insuficiente");
           
            }
        }else{
            return console.log(errorMenssage);
        }
    }else{
        return console.log(errorMenssage);
    }
}