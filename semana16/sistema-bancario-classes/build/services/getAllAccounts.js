"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contant_1 = require("../contant");
function getAllAccounts() {
    const allAccounts = contant_1.accountsFile.map(element => {
        return (`${element.name}, ${element.cpf}`);
    });
    return allAccounts;
}
exports.default = getAllAccounts;
;
//# sourceMappingURL=getAllAccounts.js.map