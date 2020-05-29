"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAccountbyCPF_1 = require("./getAccountbyCPF");
const menssages_1 = require("../menssages");
const writeInTheSystem_1 = require("./writeInTheSystem");
function addBalance(name, cpf, money) {
    const accountToAddBalance = getAccountbyCPF_1.getAccountByCpf(cpf);
    if (accountToAddBalance === undefined && accountToAddBalance.name !== name) {
        return console.log(menssages_1.errorMenssage.noAccount);
    }
    const accountsFile = require("../../data/accounts.json");
    const newFile = accountsFile.map(element => {
        if (accountToAddBalance === element) {
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
        ;
    });
    writeInTheSystem_1.writeInTheSystem(newFile);
    return console.log(menssages_1.sucessMenssage.addBalance);
}
exports.default = addBalance;
;
//# sourceMappingURL=addBalance.js.map