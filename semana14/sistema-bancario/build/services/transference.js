"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menssages_1 = require("../menssages");
const getAccountbyCPF_1 = require("./getAccountbyCPF");
const writeInTheSystem_1 = require("./writeInTheSystem");
const contant_1 = require("../contant");
const Statement_1 = require("../models/Statement");
function transference(nameOrigin, cpfOrigin, money, nameDestiny, cpfDestiny) {
    const accountOrigin = getAccountbyCPF_1.getAccountByCpf(cpfOrigin);
    const accountDestiny = getAccountbyCPF_1.getAccountByCpf(cpfDestiny);
    if (accountOrigin === undefined || accountOrigin.name !== nameOrigin ||
        accountDestiny === undefined || accountDestiny.name !== nameDestiny) {
        return console.log(menssages_1.errorMenssage.noAccount);
    }
    ;
    if (accountOrigin.balance < money) {
        return console.log(menssages_1.errorMenssage.noBalance);
    }
    ;
    const accounts = contant_1.accountsFile;
    const newFile = accounts.map(element => {
        if (accountOrigin === element) {
            const operationDescription = `Transferido ${money}, para ${accountDestiny.name}`;
            const newStatement = new Statement_1.default("transference", operationDescription);
            element.balance -= money;
            element.statement.push(newStatement);
            return element;
        }
        else if (accountDestiny === element) {
            const operationDescription = `Recebido ${money}, de ${accountOrigin.name}`;
            const newStatement = new Statement_1.default("transference", operationDescription);
            element.balance += money;
            element.statement.push(newStatement);
            return element;
        }
        else {
            return element;
        }
        ;
    });
    writeInTheSystem_1.writeInTheSystem(newFile);
    return console.log(menssages_1.sucessMenssage.tranference);
}
exports.default = transference;
;
//# sourceMappingURL=transference.js.map