"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menssages_1 = require("../menssages");
const checkUnderage_1 = require("./checkUnderage");
const getAccountbyCPF_1 = require("./getAccountbyCPF");
const writeInTheSystem_1 = require("./writeInTheSystem");
const contant_1 = require("../contant");
const Statement_1 = require("../models/Statement");
const UserAccount_1 = require("../models/UserAccount");
function createAccount(name, cpf, birthDate) {
    if (!name || !cpf || !birthDate) {
        return console.log(menssages_1.errorMenssage.missingInfoCreateAccount);
    }
    ;
    const itsUnderage = checkUnderage_1.checkUnderage(birthDate);
    if (itsUnderage) {
        return console.log(menssages_1.errorMenssage.underage);
    }
    ;
    const checkCpfAlreadyInUse = getAccountbyCPF_1.getAccountByCpf(cpf);
    if (checkCpfAlreadyInUse !== undefined) {
        return console.log(menssages_1.errorMenssage.CpfAlreadyInUse);
    }
    ;
    const operationDescription = `${name}, ${cpf}, ${birthDate}`;
    const newStatement = new Statement_1.default("createAccount", operationDescription);
    const newAccount = new UserAccount_1.default(name, cpf, birthDate, newStatement);
    const accounts = contant_1.accountsFile;
    const newFile = accounts;
    newFile.push(newAccount);
    writeInTheSystem_1.writeInTheSystem(newFile);
    return console.log(menssages_1.sucessMenssage.createAccount);
}
exports.default = createAccount;
;
//# sourceMappingURL=createAccount.js.map