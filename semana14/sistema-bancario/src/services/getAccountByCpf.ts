import {accountsFile} from "../contant";


export function getAccountByCpf(cpf:string):any{
    const accounts = accountsFile;
    
    const checkCPF = accounts.find((account)=>{
        return account.cpf === cpf
    });

    return checkCPF;
};