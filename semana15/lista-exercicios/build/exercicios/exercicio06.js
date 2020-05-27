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
exports.sendNotificationPromise = void 0;
const axios_1 = require("axios");
const URLdeBase_1 = require("../URLdeBase");
const exercicio01_1 = require("./exercicio01");
function sendNotificationPromise(notification) {
    return __awaiter(this, void 0, void 0, function* () {
        const arraySubscribers = yield exercicio01_1.getAllSubscribers();
        const promiseArray = [];
        for (const subscriber of arraySubscribers) {
            console.log("enviando mensagem para : ", subscriber.id);
            promiseArray.push(axios_1.default.post(`${URLdeBase_1.baseUrl}/notifications/send`, {
                subscriberId: subscriber.id,
                message: notification
            }).then(() => {
                console.log("Mensagem enviada para : ", subscriber.id);
            }).catch((error) => {
                console.log(error);
            }));
        }
        yield Promise.all(promiseArray);
    });
}
exports.sendNotificationPromise = sendNotificationPromise;
;
//# sourceMappingURL=exercicio06.js.map