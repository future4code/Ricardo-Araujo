import Statement from "./models/Statement";

export type account = {
    name: string,
    cpf: string,
    birthDate: string,
    balance: number,
    statement: Statement[]
};