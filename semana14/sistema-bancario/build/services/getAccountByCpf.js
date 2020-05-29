"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountByCpf = void 0;
const contant_1 = require("../contant");
function getAccountByCpf(cpf) {
    const accounts = contant_1.accountsFile;
    const checkCPF = accounts.find((account) => {
        return account.cpf === cpf;
    });
    return checkCPF;
}
exports.getAccountByCpf = getAccountByCpf;
;
//# sourceMappingURL=getAccountbyCPF.js.map