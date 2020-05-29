const accountsFile = require("../../data/accounts.json");

export default function getAllAccounts(){
    const allAccounts = accountsFile.map(element=>{
        return (`${element.name}, ${element.cpf}`)
    });
   
    return console.log(allAccounts);   
};