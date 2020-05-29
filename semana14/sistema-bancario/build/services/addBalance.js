"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const menssages_1 = require("../menssages");
const accountsFile = require("../../data/accounts.json");
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
        return console.log(menssages_1.errorMenssage);
    }
    ;
}
exports.default = addBalance;
;
//# sourceMappingURL=addBalance.js.map