"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUnderage = void 0;
const moment = require("moment");
function checkUnderage(birthDate) {
    const diffAge = moment(birthDate, "DD/MM/YYYY").fromNow();
    const age = Number(diffAge.split(" ")[0]);
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
    ;
}
exports.checkUnderage = checkUnderage;
;
//# sourceMappingURL=checkAge.js.map