export type account = {
    name: string,
    cpf: string,
    birthDate: string,
    balance: number,
    statement: statement[]
}

export type statement = {
    operation: string,
    data: any
}