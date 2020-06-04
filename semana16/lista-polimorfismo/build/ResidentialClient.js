"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResidentialClient = void 0;
const Residence_1 = require("./Residence");
class ResidentialClient extends Residence_1.Residence {
    constructor(residentsQuantity, cep, name, cpf, registrationNumber, consumedEnergy) {
        super(residentsQuantity, cep);
        this.name = name;
        this.cpf = cpf;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
    }
    ;
    getCpf() {
        return this.cpf;
    }
    ;
    calculateBill() {
        return this.consumedEnergy * 0.75;
    }
    ;
}
exports.ResidentialClient = ResidentialClient;
;
//# sourceMappingURL=ResidentialClient.js.map