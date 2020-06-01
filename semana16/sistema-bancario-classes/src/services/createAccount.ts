import { errorMenssage,sucessMenssage } from "../menssages";
import {checkUnderage} from "./checkUnderage";
import {getAccountByCpf} from "./getAccountbyCPF";
import {writeInTheSystem} from "./writeInTheSystem";
import {accountsFile} from "../contant";
import Statement from "../models/Statement";
import UserAccount from "../models/UserAccount";


export default function createAccount (name:string, cpf:string, birthDate:string):void{
    
    if(!name || !cpf || !birthDate){
        return console.log(errorMenssage.missingInfoCreateAccount);
    };

    const itsUnderage = checkUnderage(birthDate);
    
    if(itsUnderage){
        return console.log(errorMenssage.underage);
    };
    
    const checkCpfAlreadyInUse = getAccountByCpf(cpf);
    
    if(checkCpfAlreadyInUse!==undefined){
        return console.log(errorMenssage.CpfAlreadyInUse);
    };

    const operationDescription = `${name}, ${cpf}, ${birthDate}`
    const newStatement = new Statement("createAccount", operationDescription);

    const newAccount = new UserAccount(name,cpf,birthDate,newStatement);


    const accounts = accountsFile;
    const newFile = accounts;
    newFile.push(newAccount);

    writeInTheSystem(newFile);
    return console.log(sucessMenssage.createAccount);
};