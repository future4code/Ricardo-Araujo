import {errorMenssage, sucessMenssage} from "../menssages";
import {getAccountByCpf} from "./getAccountbyCPF";
import {writeInTheSystem} from "./writeInTheSystem";
import {accountsFile} from "../contant";
import Statement from "../models/Statement";



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

    
    const accounts = accountsFile;
    const newFile = accounts.map(element=>{
        if(accountOrigin===element){


            const operationDescription = `Transferido ${money}, para ${accountDestiny.name}`
            const newStatement = new Statement("transference", operationDescription);


            element.balance-=money;
            element.statement.push(newStatement);
            return element;
            
        }else if(accountDestiny===element){

            
            const operationDescription = `Recebido ${money}, de ${accountOrigin.name}`
            const newStatement = new Statement("transference", operationDescription);

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