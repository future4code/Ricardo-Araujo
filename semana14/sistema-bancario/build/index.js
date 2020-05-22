"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createAccount_1 = require("./services/createAccount");
const addBalance_1 = require("./services/addBalance");
const getBalance_1 = require("./services/getBalance");
const transference_1 = require("./services/transference");
const action = process.argv[2];
switch (action) {
    case "createAccount":
        {
            const mockAccount = {
                "name": process.argv[3],
                "cpf": process.argv[4],
                "birthDate": process.argv[5],
                "balance": Number(process.argv[6]),
                "statement": []
            };
            createAccount_1.default(mockAccount);
            break;
        }
        ;
    case "addBalance":
        {
            const name = process.argv[3];
            const cpf = process.argv[4];
            const money = Number(process.argv[5]);
            addBalance_1.default(name, cpf, money);
            break;
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
            transference_1.default(nameOrigin, cpfOrigin, money, nameDestiny, cpfDestiny);
            break;
        }
        ;
    case "getAllAccounts": {
        getBalance_1.default();
        break;
    }
    default: {
        console.log("não temos nenhuma operação do tipo selecionado");
    }
}
;
//# sourceMappingURL=index.js.map