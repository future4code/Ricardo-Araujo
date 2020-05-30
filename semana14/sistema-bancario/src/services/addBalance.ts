import {getAccountByCpf} from "./getAccountbyCPF";
import {errorMenssage, sucessMenssage} from "../menssages";
import {writeInTheSystem} from "./writeInTheSystem";
import {accountsFile} from "../contant";
import Statement from "../models/Statement";


export default function addBalance(name: string, cpf: string, money: number):void{
    
    const accountToAddBalance = getAccountByCpf(cpf);
    
    if(accountToAddBalance===undefined || accountToAddBalance.name!==name){
        return console.log(errorMenssage.noAccount)
    };
    
    const accounts = accountsFile;
    const newFile = accounts.map(element=>{
        if(accountToAddBalance===element){

            const newStatement = new Statement("addBalance", money);

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