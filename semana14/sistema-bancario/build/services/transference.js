"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const errorMensages_1 = require("../errorMensages");
const accountsFile = require("../../data/accounts.json");
function transference(nameOrigin, cpfOrigin, money, nameDestiny, cpfDestiny) {
    const findCPFOrigin = accountsFile.find((account) => {
        return account.cpf === cpfOrigin;
    });
    const findCPFDestiny = accountsFile.find((account) => {
        return account.cpf === cpfDestiny;
    });
    if (findCPFOrigin !== undefined && findCPFDestiny !== undefined) {
        if (findCPFOrigin.name === nameOrigin && findCPFDestiny.name === nameDestiny) {
            if (findCPFOrigin.balance >= money) {
                const neWFile = accountsFile.map(element => {
                    if (findCPFOrigin === element) {
                        const newStatement = {
                            operation: "transference",
                            data: money
                        };
                        element.balance -= money;
                        element.statement.push(newStatement);
                        return element;
                    }
                    else if (findCPFDestiny === element) {
                        const newStatement = {
                            operation: "transference",
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
                return console.log("Transferencia realizada com sucesso");
            }
            else {
                return console.log("Saldo insuficiente");
            }
        }
        else {
            return console.log(errorMensages_1.errorMensage);
        }
    }
    else {
        return console.log(errorMensages_1.errorMensage);
    }
}
exports.default = transference;
//# sourceMappingURL=transference.js.map