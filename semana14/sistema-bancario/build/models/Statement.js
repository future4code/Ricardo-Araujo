"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class Statement {
    constructor(operation, description) {
        this.operation = operation;
        this.date = moment().format("DD/MM/YYYY, HH:mm:ss");
        this.description = description;
    }
    ;
}
exports.default = Statement;
;
//# sourceMappingURL=Statement.js.map