import { Commerce } from "./Commerce";
import { Client } from "./Client";


export class CommercialClient extends Commerce implements Client{
    constructor(
        cep: string,
        floorsQuantity: number,
        private CNPJ: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number
    ){
        super(floorsQuantity, cep)
    };

    public calculateBill(): number{
        return this.consumedEnergy*0,53
    };
};