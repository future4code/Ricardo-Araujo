import { Residence } from "./Residence";
import { Client } from "./Client";


export class ResidentialClient extends Residence implements Client{
    
    constructor(
        residentsQuantity: number,
        cep: string,
        public name: string,
        private cpf: string,
        public registrationNumber: number,
        public consumedEnergy: number
    ){
        super(residentsQuantity, cep)
    };

    public getCpf():string{
        return this.cpf;
    };

    public calculateBill():number{
        return this.consumedEnergy * 0.75
    };
};