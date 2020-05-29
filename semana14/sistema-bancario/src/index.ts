import {account} from "./types";
import {errorMenssage} from "./menssages";
import createAccount from "./services/createAccount";
import addBalance from "./services/addBalance";
import getAllAccounts from "./services/getAllAccounts";
import transference from "./services/transference";

const action: string = process.argv[2];

function main():void{
    
    switch(action){
        case "createAccount":{
            
            const mockAccount: account = {
                "name": process.argv[3],
                "cpf": process.argv[4],
                "birthDate": process.argv[5],
                "balance": 0,
                "statement": []
            };
    
            return createAccount(mockAccount);
        };
    
        case "addBalance":{
            const name: string = process.argv[3];
            const cpf: string = process.argv[4];
            const money: number = Number(process.argv[5]);
    
            return addBalance(name, cpf, money);
        };
    
        case "payBill":{
    
    
        };
    
        case "transference":{
            const nameOrigin: string = process.argv[3];
            const cpfOrigin: string = process.argv[4];
            const money: number = Number(process.argv[5]);
            const nameDestiny: string = process.argv[6];
            const cpfDestiny: string = process.argv[7];
    
            return transference(nameOrigin, cpfOrigin, money, nameDestiny, cpfDestiny);
        };
    
        case "getAllAccounts":{
            return console.log(getAllAccounts());
        };
    
        default:{
            return console.log(errorMenssage.noOperation);
        };
    };
};

main();