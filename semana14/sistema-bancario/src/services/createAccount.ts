import { account } from "../types";
import { errorMenssage,sucessMenssage } from "../menssages";
import {checkUnderage} from "./checkUnderage";
import {getAccountByCpf} from "./getAccountbyCPF";
import {writeInTheSystem} from "./writeInTheSystem";
import {accountsFile} from "../contant";


export default function createAccount (mockAccount: account):void{

    console.log(mockAccount);
    
    if(!mockAccount.name || !mockAccount.cpf || !mockAccount.birthDate || mockAccount.balance!==0){
        return console.log(errorMenssage.missingInfoCreateAccount)
    };
    
    const itsUnderage = checkUnderage(mockAccount.birthDate);
    
    if(itsUnderage){
        return console.log(errorMenssage.underage);
    };
    
    const checkCpfAlreadyInUse = getAccountByCpf(mockAccount.cpf);
    
    if(checkCpfAlreadyInUse!==undefined){
        return console.log(errorMenssage.CpfAlreadyInUse);
    };
    
    const accounts = accountsFile;
    const newFile = accounts;
    newFile.push(mockAccount);

    writeInTheSystem(newFile);
    return console.log(sucessMenssage.createAccount);
};