"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio07_1 = require("./exercicios/exercicio07");
console.log("hello world");
const newNews = {
    title: "Chikorita",
    content: "é o melhor pokemon inicial do tipo grama",
    date: 1589818936000
};
const newUser = {
    name: "Doutor NodeJS",
    email: "dinokiller@bol.com.br"
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            exercicio07_1.getAllNotifications();
        }
        catch (error) {
            console.log(error);
        }
    });
}
;
main();
//# sourceMappingURL=index.js.map