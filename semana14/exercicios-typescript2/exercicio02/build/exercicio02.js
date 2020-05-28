"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const fileName = process.argv[2];
const taskText = process.argv[3];
if (fileName && taskText) {
    try {
        fs.appendFileSync(`tasksExercicio2/${fileName}`, `\n${taskText}`);
        console.log("\x1b[34m", "Tarefa adicionada com sucesso!");
    }
    catch (error) {
        console.error("\x1b[31m", error);
    }
}
else {
    console.log("\x1b[31m", "Erro: digite o nome do arquivo e tarefa seguidos por espaço");
}
//# sourceMappingURL=exercicio02.js.map