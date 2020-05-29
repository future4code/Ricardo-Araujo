"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menssages_1 = require("./menssages");
const createAccount_1 = require("./services/createAccount");
const addBalance_1 = require("./services/addBalance");
const getAllAccounts_1 = require("./services/getAllAccounts");
const transference_1 = require("./services/transference");
const action = process.argv[2];
function main() {
    switch (action) {
        case "createAccount":
            {
                const mockAccount = {
                    "name": process.argv[3],
                    "cpf": process.argv[4],
                    "birthDate": process.argv[5],
                    "balance": 0,
                    "statement": []
                };
                return createAccount_1.default(mockAccount);
            }
            ;
        case "addBalance":
            {
                const name = process.argv[3];
                const cpf = process.argv[4];
                const money = Number(process.argv[5]);
                return addBalance_1.default(name, cpf, money);
            }
            ;
        case "payBill":
            {
            }
            ;
        case "transference":
            {
                const nameOrigin = process.argv[3];
                const cpfOrigin = process.argv[4];
                const money = Number(process.argv[5]);
                const nameDestiny = process.argv[6];
                const cpfDestiny = process.argv[7];
                return transference_1.default(nameOrigin, cpfOrigin, money, nameDestiny, cpfDestiny);
            }
            ;
        case "getAllAccounts":
            {
                return console.log(getAllAccounts_1.default());
            }
            ;
        default:
            {
                return console.log(menssages_1.errorMenssage.noOperation);
            }
            ;
    }
    ;
}
;
main();
//# sourceMappingURL=index.js.map