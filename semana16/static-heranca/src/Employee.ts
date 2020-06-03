import {User} from "./User"

export class Employee extends User{
    protected admissionDate: string;
    protected baseSalary: number;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: string,
        baseSalary: number
    ){
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Employee");
        this.admissionDate = admissionDate;
        this.baseSalary = baseSalary;
    };

    public getAdmissionDate():string{
        return this.admissionDate;
    };

    public getBaseSalary():number{
        return this.baseSalary;
    };

    public calculateTotalSalary():number{
        return (this.baseSalary+400);
    }
};

// const newEmployee = new Employee("06", "exercicio06@gmail.com", "Usuario do exercicio 06", "novaSenha", "02/06/2020", 234);

// console.log(newEmployee.calculateTotalSalary());

/*
exercicio 06
a. uma vez (estou comentando as outras intancias, então aqui só aparece uma vez)

b. só não é possível obter o password
*/