import {accountsFile} from "../contant";

export default function getAllAccounts():any{
    const allAccounts = accountsFile.map(element=>{
        return (`${element.name}, ${element.cpf}`)
    });
   
    return allAccounts;   
};