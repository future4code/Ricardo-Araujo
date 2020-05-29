
const accountsFile = require("../../data/accounts.json");


export function getAccountByCpf(cpf){
    
    const checkCPF = accountsFile.find((account)=>{
        return account.cpf === cpf
    });

    return checkCPF;
};


console.log(getAccountByCpf("000.001.003-23"));