import * as fs from "fs";

const accountsFile = require("../data/accounts.json");

type account = {
    name: string,
    cpf: string,
    birthDate: string,
    balance: number,
    statement: statement[]
}

type statement = {
    operation: string,
    data: any
}


const action: string = process.argv[2];
const errorMensage = "Não encontramos nenhuma conta correspondente"


switch(action){

    case "createAccount":{
        
        const mockAccount: account = {
            "name": process.argv[3],
            "cpf": process.argv[4],
            "birthDate": process.argv[5],
            "balance": Number(process.argv[6]),
            "statement": []
        }

        if(mockAccount.name && mockAccount.cpf && mockAccount.birthDate && mockAccount.balance){
            
            const checkCPF = accountsFile.find((account)=>{
                        return account.cpf === mockAccount.cpf
                    })
            
            if(checkCPF===undefined){
               
                const neWFile = accountsFile;
    
                neWFile.push(mockAccount);
        
                try{
                    fs.writeFileSync(`data/accounts.json`, JSON.stringify(neWFile));
                    console.log('Criado com sucesso');
                    break;
                }catch(error){
                    console.error(error);
                    break;
                }
            }else{
                console.log("Já existe uma conta com este associado cpf!");
            }
        }else{
            console.log("digite um nome, cpf, birthDate, balance");
            break;
        }

    };
    case "balance":{
        
        const name: string = process.argv[3];
        const cpf: string = process.argv[4];

        const findCPF = accountsFile.find((account)=>{
            return account.cpf === cpf
        })

        if(findCPF!==undefined && findCPF.name===name){
            console.log(`O seu saldo é ${findCPF.balance}`);
            break;
        }else{
            console.log(errorMensage);
            break;
        }

    };

    case "addMoney":{
        const name: string = process.argv[3];
        const cpf: string = process.argv[4];
        const money: number = Number(process.argv[5]);

        const findCPF = accountsFile.find((account)=>{
            return account.cpf === cpf
        })

        if(findCPF!==undefined && findCPF.name===name){
            
            const neWFile = accountsFile.map(element=>{
                if(findCPF===element){

                    const newStatement: statement={
                        operation: action,
                        data: money
                    }
        
                    element.balance+=money;
                    element.statement.push(newStatement);
                    return element;
                }else{
                    return element;
                }
            })

            fs.writeFileSync(`data/accounts.json`, JSON.stringify(neWFile));
            break;
        }else{
            console.log(errorMensage)
        }
    };

    case "payBill":{

    };

    case "transference":{
        const nameOrigin: string = process.argv[3];
        const cpfOrigin: string = process.argv[4];
        const money: number = Number(process.argv[5]);
        const nameDestiny: string = process.argv[6];
        const cpfDestiny: string = process.argv[7];

        const findCPFOrigin = accountsFile.find((account)=>{
            return account.cpf === cpfOrigin
        });

        const findCPFDestiny = accountsFile.find((account)=>{
            return account.cpf === cpfDestiny
        });

        if(findCPFOrigin!==undefined && findCPFDestiny!==undefined){
            
            if(findCPFOrigin.name === nameOrigin && findCPFDestiny.name === nameDestiny){

                if(findCPFOrigin.balance>=money){

                    const neWFile = accountsFile.map(element=>{
                        if(findCPFOrigin===element){
        
                            const newStatement: statement={
                                operation: action,
                                data: money
                            }
                
                            element.balance-=money;
                            element.statement.push(newStatement);
                            return element;
                            
                        }else if(findCPFDestiny===element){
    
                            const newStatement: statement={
                                operation: action,
                                data: money
                            }
                
                            element.balance+=money;
                            element.statement.push(newStatement);
                            return element;
                        }else{
                            return element;
                        }
                    });
                    
                    fs.writeFileSync(`data/accounts.json`, JSON.stringify(neWFile));
                    console.log("Transferencia realizada com sucesso")
                    break;
    
                }else{
                    console.log("Saldo insuficiente");
                    break;
                }
            }else{
                console.log(errorMensage);
                break;
            }
        }else{
            console.log(errorMensage);
            break;
        }
    };

    case "getAllAccounts":{
        const allAccounts = accountsFile.map(element=>{
            return (`${element.name}, ${element.cpf}`)
        });
        console.log(allAccounts);
        break;
    }

    default:{
        console.log("não temos nenhuma operação do tipo selecionado");
    }
};