import {statement} from "../types"
import {getAccountByCpf} from "./getAccountbyCPF";
import {errorMenssage, sucessMenssage} from "../menssages";
import {writeInTheSystem} from "./writeInTheSystem";


export default function addBalance(name: string, cpf: string, money: number):void{
    
    const accountToAddBalance = getAccountByCpf(cpf);
    
    if(accountToAddBalance===undefined && accountToAddBalance.name!==name){
        return console.log(errorMenssage.noAccount)
    }
    
    const accountsFile = require("../../data/accounts.json");
    const newFile = accountsFile.map(element=>{
        if(accountToAddBalance===element){

            const newStatement: statement={
                operation: "addBalance",
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
    return console.log(sucessMenssage.addBalance);
};