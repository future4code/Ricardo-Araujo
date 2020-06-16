import {getAccountByCpf} from "./getAccountByCpf";
import { errorMenssage } from "../menssages";



export default function getBalance(name:string, cpf:string):void{
    
    const accountToGetBalance = getAccountByCpf(cpf);

    if(accountToGetBalance===undefined || accountToGetBalance.name!==name){
        return console.log(errorMenssage.noAccount);
    };

    return console.log(`O saldo da conta é ${accountToGetBalance.balance}`);
};

