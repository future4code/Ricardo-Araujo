"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const errorMensages_1 = require("../errorMensages");
const accountsFile = require("../../data/accounts.json");
const moment = require("moment");
function createAccount(mockAccount) {
    if (mockAccount.name && mockAccount.cpf && mockAccount.birthDate && mockAccount.balance) {
        const diffAge = moment(mockAccount.birthDate, "DD/MM/YYYY").fromNow();
        const age = Number(diffAge.split(" ")[0]);
        if (age >= 18) {
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
            return console.log(errorMensages_1.erroUnderage);
        }
    }
    else {
        return console.log("digite um nome, cpf, birthDate, balance");
    }
}
exports.default = createAccount;
;
//# sourceMappingURL=createAccount copy.js.map