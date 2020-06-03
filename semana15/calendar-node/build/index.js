"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const createEvent_1 = require("./services/createEvent");
const newEvent = {
    name: "Jogar the witcher",
    description: "paradigma de programação",
    dateStart: moment("30/05/2020, 11:40", "DD/MM/YYYY, HH:mm"),
    dateEnd: moment("29/06/2020, 12:30", "DD/MM/YYYY, HH:mm")
};
function main() {
    createEvent_1.createEvent(newEvent);
}
;
main();
//# sourceMappingURL=index.js.map