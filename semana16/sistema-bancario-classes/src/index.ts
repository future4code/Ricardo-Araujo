import {account} from "./types";
import {errorMenssage} from "./menssages";
import createAccount from "./services/createAccount";
import addBalance from "./services/addBalance";
import getAllAccounts from "./services/getAllAccounts";
import transference from "./services/transference";
import getBalance from "./services/getBalance";


const action: string = process.argv[2];

function main():void{
    
    switch(action){
        case "createAccount":{

            const name: string = process.argv[3];
            const cpf: string = process.argv[4];
            const birthDate: string = process.argv[5]
    
            return createAccount(name, cpf, birthDate);
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

        case "getBalance":{
            const name: string = process.argv[3];
            const cpf: string = process.argv[4];
            return getBalance(name, cpf);
        }
    
        default:{
            return console.log(errorMenssage.noOperation);
        };
    };
};

main();


/*
Exercicios

1. o construtor é um método da função class, que permite criar objetos a partir da classe,
para usarmos o construtor chamamos new NOME_CLASSE(ARGUMENTOS CONSTRUTOR DA CLASSE)
 
2. uma vez

3. através de algum método que retorne o valor desta propriedade, como o famoso getter

4. não, pois o método getBalance esta incompleto, porém poderiamos completalo com um return this.balance


class UserAccount {
    private balance: number;
    private cpf: string;
    private name: string;
    private age: number;
    private transactions: any[];
    
    constructor(
        balance: number = 0,
        cpf: string,
        name: string,
        age: number,
        transactions: any[] = []) {
            
            console.log("Chamando o construtor da classe UserAccount")
            this.balance = balance;
            this.cpf = cpf;
            this.name = name;
            this.age = age;
            this.transactions = transactions
        }
        
        public getBalance(): void {
            //Aqui deve ser inserida a lógica de pegar saldo do usuário
        }
        
        public addBalance(): void {
            //Aqui deve ser inserida a lógica de adicionar saldo 
            console.log('Saldo atualizado com sucesso')
        }
        
    }
    
    const teste = new UserAccount(100, "101.102.103-23", "Ricardo", 27,  );
   */