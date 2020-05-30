import Statement from "./models/Statement";
import * as moment from "moment"

export type account = {
    name: string,
    cpf: string,
    birthDate: string,
    balance: number,
    statement: Statement[]
};