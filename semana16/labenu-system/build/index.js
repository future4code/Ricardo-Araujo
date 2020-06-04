"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NightMission_1 = require("./entities/NightMission");
const moment = require("moment");
const turmaDaNight = new NightMission_1.NightMission(103893245, moment("29/02/2031", "DD/MM/YYYY"), moment("30/08/2013", "DD/MM/YYYY"));
turmaDaNight.setName("ninjas-na-night");
console.log(turmaDaNight.getName());
//# sourceMappingURL=index.js.map