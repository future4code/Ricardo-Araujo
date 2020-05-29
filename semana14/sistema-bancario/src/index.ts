import {account} from "./types"
import createAccount from "./services/createAccount";
import addBalance from "./services/addBalance";
import getAllAccounts from "./services/getAllAccounts";
import transference from "./services/transference";

const action: string = process.argv[2];

function main(){
    
    switch(action){
        case "createAccount":{
            
            const mockAccount: account = {
                "name": process.argv[3],
                "cpf": process.argv[4],
                "birthDate": process.argv[5],
                "balance": Number(process.argv[6]),
                "statement": []
            }
    
            createAccount(mockAccount);
            break;
        };
    
        case "addBalance":{
            const name: string = process.argv[3];
            const cpf: string = process.argv[4];
            const money: number = Number(process.argv[5]);
    
            addBalance(name, cpf, money);
            break;
        };
    
        case "payBill":{
    
    
        };
    
        case "transference":{
            const nameOrigin: string = process.argv[3];
            const cpfOrigin: string = process.argv[4];
            const money: number = Number(process.argv[5]);
            const nameDestiny: string = process.argv[6];
            const cpfDestiny: string = process.argv[7];
    
            transference(nameOrigin, cpfOrigin, money, nameDestiny, cpfDestiny);
            break;
        };
    
        case "getAllAccounts":{
            getAllAccounts();
            break;
        };
    
        default:{
            console.log("não temos nenhuma operação do tipo selecionado");
        };
    };
};

main();