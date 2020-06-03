import Statement from "./Statement";

export default class UserAccount{
    name: string
    cpf: string
    birthDate: string
    balance: number
    statement: Statement[]

    constructor(name:string, cpf:string, birthDate: string, statement:Statement){
        this.name = name
        this.cpf = cpf
        this.birthDate = birthDate
        this.balance = 0
        this.statement = [statement]
    };
};


 