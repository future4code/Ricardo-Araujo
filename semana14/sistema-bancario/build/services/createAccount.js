"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menssages_1 = require("../menssages");
const checkUnderage_1 = require("./checkUnderage");
const getAccountbyCPF_1 = require("./getAccountbyCPF");
const writeInTheSystem_1 = require("./writeInTheSystem");
const contant_1 = require("../contant");
function createAccount(mockAccount) {
    console.log(mockAccount);
    if (!mockAccount.name || !mockAccount.cpf || !mockAccount.birthDate || mockAccount.balance !== 0) {
        return console.log(menssages_1.errorMenssage.missingInfoCreateAccount);
    }
    ;
    const itsUnderage = checkUnderage_1.checkUnderage(mockAccount.birthDate);
    if (itsUnderage) {
        return console.log(menssages_1.errorMenssage.underage);
    }
    ;
    const checkCpfAlreadyInUse = getAccountbyCPF_1.getAccountByCpf(mockAccount.cpf);
    if (checkCpfAlreadyInUse !== undefined) {
        return console.log(menssages_1.errorMenssage.CpfAlreadyInUse);
    }
    ;
    const accounts = contant_1.accountsFile;
    const newFile = accounts;
    newFile.push(mockAccount);
    writeInTheSystem_1.writeInTheSystem(newFile);
    return console.log(menssages_1.sucessMenssage.createAccount);
}
exports.default = createAccount;
;
//# sourceMappingURL=createAccount.js.map