"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = exports.addBalance = exports.createAccount = void 0;
const fs = require("fs");
const accountsFile = require("../data/accounts.json");
const errorMensage = "Não encontramos nenhuma conta correspondente";
function createAccount(mockAccount) {
    if (mockAccount.name && mockAccount.cpf && mockAccount.birthDate && mockAccount.balance) {
        const checkCPF = accountsFile.find((account) => {
            return account.cpf === mockAccount.cpf;
        });
        if (checkCPF === undefined) {
            const neWFile = accountsFile;
            neWFile.push(mockAccount);
            try {
                fs.writeFileSync(`data/accounts.json`, JSON.stringify(neWFile));
                return console.log('Criado com sucesso');
            }
            catch (error) {
                return console.error(error);
            }
        }
        else {
            return console.log("Já existe uma conta com este associado cpf!");
        }
    }
    else {
        return console.log("digite um nome, cpf, birthDate, balance");
    }
}
exports.createAccount = createAccount;
;
function addBalance(name, cpf, money) {
    const findCPF = accountsFile.find((account) => {
        return account.cpf === cpf;
    });
    if (findCPF !== undefined && findCPF.name === name) {
        const neWFile = accountsFile.map(element => {
            if (findCPF === element) {
                const newStatement = {
                    operation: "addBalance",
                    data: money
                };
                element.balance += money;
                element.statement.push(newStatement);
                return element;
            }
            else {
                return element;
            }
        });
        fs.writeFileSync(`data/accounts.json`, JSON.stringify(neWFile));
        return console.log("valor adicionado com sucesso!");
    }
    else {
        return console.log(errorMensage);
    }
}
exports.addBalance = addBalance;
function getBalance() {
    const allAccounts = accountsFile.map(element => {
        return (`${element.name}, ${element.cpf}`);
    });
    return console.log(allAccounts);
}
exports.getBalance = getBalance;
//# sourceMappingURL=functions.js.map