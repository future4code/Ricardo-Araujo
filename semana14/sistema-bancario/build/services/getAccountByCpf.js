"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountByCpf = void 0;
const accountsFile = require("../../data/accounts.json");
function getAccountByCpf(cpf) {
    const checkCPF = accountsFile.find((account) => {
        return account.cpf === cpf;
    });
    return checkCPF;
}
exports.getAccountByCpf = getAccountByCpf;
;
console.log(getAccountByCpf("000.001.003-23"));
//# sourceMappingURL=getAccountbyCPF.js.map