"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = void 0;
const Employee_1 = require("./Employee");
let Seller = (() => {
    class Seller extends Employee_1.Employee {
        constructor() {
            super(...arguments);
            this.salesQuantity = 0;
        }
        setSalesQuantity(newValue) {
            this.salesQuantity = newValue;
        }
        ;
        getSalesQuantity() {
            return this.salesQuantity;
        }
        ;
        calculateTotalSalary() {
            return (this.baseSalary + Seller.BENEFITS_VALUE + (Seller.SELLING_COMMISSION * this.salesQuantity));
        }
        ;
    }
    Seller.BENEFITS_VALUE = 400;
    Seller.SELLING_COMMISSION = 5;
    return Seller;
})();
exports.Seller = Seller;
;
const newSeller = new Seller("08", "exercicio08@gmail.com", "usuario exercicio08", "senhaDificil", "06/02/2020", 1000);
newSeller.setSalesQuantity(3);
console.log(newSeller.calculateTotalSalary());
//# sourceMappingURL=Seller.js.map