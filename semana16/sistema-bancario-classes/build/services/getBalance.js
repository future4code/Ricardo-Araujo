"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAccountByCpf_1 = require("./getAccountByCpf");
const menssages_1 = require("../menssages");
function getBalance(name, cpf) {
    const accountToGetBalance = getAccountByCpf_1.getAccountByCpf(cpf);
    if (accountToGetBalance === undefined || accountToGetBalance.name !== name) {
        return console.log(menssages_1.errorMenssage.noAccount);
    }
    ;
    return console.log(`O saldo da conta é ${accountToGetBalance.balance}`);
}
exports.default = getBalance;
;
//# sourceMappingURL=getBalance.js.map