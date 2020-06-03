import { Employee } from "./Employee";


export class Seller extends Employee{
    private salesQuantity: number = 0;
    static BENEFITS_VALUE: number = 400;
    static SELLING_COMMISSION: number = 5;

    public setSalesQuantity(newValue:number):void{
        this.salesQuantity = newValue
    };

    public getSalesQuantity():number{
        return this.salesQuantity;
    };

    public calculateTotalSalary():number{
        return (this.baseSalary + Seller.BENEFITS_VALUE + (Seller.SELLING_COMMISSION*this.salesQuantity));
    };
};

const newSeller = new Seller("08", "exercicio08@gmail.com", "usuario exercicio08", "senhaDificil", "06/02/2020", 1000);

// console.log(newSeller.getId());
// console.log(newSeller.getEmail());
// console.log(newSeller.getName());
// console.log(newSeller.getAdmissionDate());
// console.log(newSeller.getBaseSalary());
newSeller.setSalesQuantity(3)
console.log(newSeller.calculateTotalSalary());

/*
exercicio 08

a. os mesmo parametros do construtor do Employee
b. conseguimos usar todos os get das classes User e Employee

*/