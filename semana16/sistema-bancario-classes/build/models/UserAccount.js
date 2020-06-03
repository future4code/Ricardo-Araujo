"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserAccount {
    constructor(name, cpf, birthDate, statement) {
        this.name = name;
        this.cpf = cpf;
        this.birthDate = birthDate;
        this.balance = 0;
        this.statement = [statement];
    }
    ;
}
exports.default = UserAccount;
;
//# sourceMappingURL=UserAccount.js.map