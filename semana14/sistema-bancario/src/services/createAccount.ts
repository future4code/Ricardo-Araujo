import * as fs from "fs";
import { account } from "../types";
import { errorMenssage } from "../menssages";
import {checkUnderage} from "./checkUnderage";
import {getAccountByCpf} from "./getAccountbyCPF";
import {writeInTheSystem} from "./writeInTheSystem"

const accountsFile = require("../../data/accounts.json");

export default function createAccount (mockAccount: account):void{


    if(!mockAccount.name || !mockAccount.cpf || !mockAccount.birthDate || !mockAccount.balance){
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

    const newFile = accountsFile;
    newFile.push(mockAccount);

    writeInTheSystem(newFile);
};