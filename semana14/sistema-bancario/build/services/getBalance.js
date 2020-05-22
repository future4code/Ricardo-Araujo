"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accountsFile = require("../../data/accounts.json");
function getBalance() {
    const allAccounts = accountsFile.map(element => {
        return (`${element.name}, ${element.cpf}`);
    });
    return console.log(allAccounts);
}
exports.default = getBalance;
//# sourceMappingURL=getBalance.js.map