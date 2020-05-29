import {accountsFile} from "../contant";


export function getAccountByCpf(cpf){
    const accounts = accountsFile;
    
    const checkCPF = accounts.find((account)=>{
        return account.cpf === cpf
    });

    return checkCPF;
};