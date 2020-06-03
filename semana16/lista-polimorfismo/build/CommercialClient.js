"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommercialClient = void 0;
const Commerce_1 = require("./Commerce");
class CommercialClient extends Commerce_1.Commerce {
    constructor(cep, floorsQuantity, CNPJ, name, registrationNumber, consumedEnergy) {
        super(floorsQuantity, cep);
        this.CNPJ = CNPJ;
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
    }
    ;
    calculateBill() {
        return this.consumedEnergy * 0, 53;
    }
    ;
}
exports.CommercialClient = CommercialClient;
;
//# sourceMappingURL=CommercialClient.js.map