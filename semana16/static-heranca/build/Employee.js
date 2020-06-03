"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const User_1 = require("./User");
class Employee extends User_1.User {
    constructor(id, email, name, password, admissionDate, baseSalary) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Employee");
        this.admissionDate = admissionDate;
        this.baseSalary = baseSalary;
    }
    ;
    getAdmissionDate() {
        return this.admissionDate;
    }
    ;
    getBaseSalary() {
        return this.baseSalary;
    }
    ;
    calculateTotalSalary() {
        return (this.baseSalary + 400);
    }
}
exports.Employee = Employee;
;
//# sourceMappingURL=Employee.js.map