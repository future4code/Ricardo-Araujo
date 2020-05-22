import * as fs from "fs";
import { account } from "../types";
import { errorMensage, erroUnderage } from "../errorMensages";

const accountsFile = require("../../data/accounts.json");
const moment = require("moment");

export default function createAccount (mockAccount: account):void{

    if(mockAccount.name && mockAccount.cpf && mockAccount.birthDate && mockAccount.balance){
        
        const diffAge: string = moment(mockAccount.birthDate, "DD/MM/YYYY").fromNow();

        const age = Number(diffAge.split(" ")[0]);
        
        if(age>=18){
               const checkCPF = accountsFile.find((account)=>{
                           return account.cpf === mockAccount.cpf
                       });
               
               if(checkCPF===undefined){
               
                   const neWFile = accountsFile;
       
                   neWFile.push(mockAccount);
       
                   try{
                       fs.writeFileSync(`data/accounts.json`, JSON.stringify(neWFile));
                       return console.log('Criado com sucesso');
                       
                   }catch(error){
                       return console.error(error);
                   }
               }else{
                   return console.log("Já existe uma conta com este associado cpf!");
               }
           }else{
               return console.log(erroUnderage);
            }
        }else{
            return console.log("digite um nome, cpf, birthDate, balance");
        }
};