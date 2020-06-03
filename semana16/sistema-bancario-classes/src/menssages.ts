export enum errorMenssage{
    underage="O usuario não tem mais de 18 anos",
    missingInfoCreateAccount="Conta não criada, digite um nome, cpf, birthDate",
    CpfAlreadyInUse="Já existe uma conta com este cpf associado",
    noAccount="Não encontramos conta correspontende com estes dados",
    noBalance="Saldo insuficiente",
    noOperation = "não temos nenhuma operação do tipo selecionado",
    write = "Erro ao gravar o arquivo"
};

export enum sucessMenssage{
    write="Dados gravados com sucesso!",
    createAccount="Conta criada com sucesso",
    addBalance="Saldo alterado com sucesso",
    tranference="Transferência realizada com sucesso"
};