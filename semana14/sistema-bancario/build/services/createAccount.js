"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menssages_1 = require("../menssages");
const accountsFile = require("../../data/accounts.json");
function createAccount(mockAccount) {
    if (!mockAccount.name || !mockAccount.cpf || !mockAccount.birthDate || !mockAccount.balance) {
        return console.log(menssages_1.errorMenssage.missingInfoCreateAccount);
    }
    ;
    console.log("depois do if");
}
exports.default = createAccount;
;
//# sourceMappingURL=createAccount.js.map