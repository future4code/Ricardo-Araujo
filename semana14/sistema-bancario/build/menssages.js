"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sucessMenssage = exports.errorMenssage = void 0;
var errorMenssage;
(function (errorMenssage) {
    errorMenssage["underage"] = "O usuario n\u00E3o tem mais de 18 anos";
    errorMenssage["missingInfoCreateAccount"] = "Conta n\u00E3o criada, digite um nome, cpf, birthDate, balance";
    errorMenssage["CpfAlreadyInUse"] = "J\u00E1 existe uma conta com este cpf associado";
    errorMenssage["noAccount"] = "N\u00E3o encontramos conta correspontende com estes dados";
})(errorMenssage = exports.errorMenssage || (exports.errorMenssage = {}));
;
var sucessMenssage;
(function (sucessMenssage) {
    sucessMenssage["write"] = "Dados gravados com sucesso!";
    sucessMenssage["createAccount"] = "Conta criada com sucesso";
    sucessMenssage["addBalance"] = "Saldo alterado com sucesso";
})(sucessMenssage = exports.sucessMenssage || (exports.sucessMenssage = {}));
//# sourceMappingURL=menssages.js.map