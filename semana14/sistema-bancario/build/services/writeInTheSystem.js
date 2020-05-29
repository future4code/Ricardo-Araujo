"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeInTheSystem = void 0;
const fs = require("fs");
const menssages_1 = require("../menssages");
function writeInTheSystem(newFile) {
    try {
        fs.writeFileSync(`data/accounts.json`, JSON.stringify(newFile));
        return console.log(menssages_1.sucessMenssage.write);
    }
    catch (error) {
        return console.error(error);
    }
}
exports.writeInTheSystem = writeInTheSystem;
;
//# sourceMappingURL=writeInTheSystem.js.map