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
exports.getAllNotifications = exports.createAndSendNotifications = exports.createSubscriber = void 0;
const axios_1 = require("axios");
const URLdeBase_1 = require("../URLdeBase");
const exercicio04_1 = require("./exercicio04");
const exercicio06_1 = require("./exercicio06");
const exercicio01_1 = require("./exercicio01");
function createSubscriber(body) {
    return __awaiter(this, void 0, void 0, function* () {
        yield axios_1.default.put(`${URLdeBase_1.baseUrl}/subscribers`, body).then(() => {
            console.log("usuario cadastrado com sucesso");
        }).catch((error) => {
            console.log(error);
        });
    });
}
exports.createSubscriber = createSubscriber;
;
function createAndSendNotifications(body, notification) {
    return __awaiter(this, void 0, void 0, function* () {
        yield exercicio04_1.createNews(body).then(() => __awaiter(this, void 0, void 0, function* () {
            yield exercicio06_1.sendNotificationPromise(notification);
        })).catch((error) => {
            console.log(error);
        });
    });
}
exports.createAndSendNotifications = createAndSendNotifications;
function getAllNotifications() {
    return __awaiter(this, void 0, void 0, function* () {
        const allSubscribers = yield exercicio01_1.getAllSubscribers();
        const allNotifications = [];
        for (const subscriber of allSubscribers) {
            allNotifications.push(axios_1.default.get(`${URLdeBase_1.baseUrl}/subscribers/${subscriber.id}/notifications/all`).catch((error) => console.log(error)));
        }
        ;
        return console.log(yield Promise.all(allNotifications));
    });
}
exports.getAllNotifications = getAllNotifications;
//# sourceMappingURL=exercicio07.js.map