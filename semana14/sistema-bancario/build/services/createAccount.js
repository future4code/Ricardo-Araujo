"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menssages_1 = require("../menssages");
const checkUnderage_1 = require("./checkUnderage");
const getAccountbyCPF_1 = require("./getAccountbyCPF");
const writeInTheSystem_1 = require("./writeInTheSystem");
function createAccount(mockAccount) {
    if (!mockAccount.name || !mockAccount.cpf || !mockAccount.birthDate || !mockAccount.balance) {
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
    const accountsFile = require("../../data/accounts.json");
    const newFile = accountsFile;
    newFile.push(mockAccount);
    writeInTheSystem_1.writeInTheSystem(newFile);
    return console.log(menssages_1.sucessMenssage.createAccount);
}
exports.default = createAccount;
;
//# sourceMappingURL=createAccount.js.map