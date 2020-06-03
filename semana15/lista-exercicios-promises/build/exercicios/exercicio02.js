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
exports.getAllSubscribersArrow = void 0;
const axios_1 = require("axios");
const URLdeBase_1 = require("../URLdeBase");
exports.getAllSubscribersArrow = () => __awaiter(void 0, void 0, void 0, function* () {
    const allSubscribersResult = yield axios_1.default.get(`${URLdeBase_1.baseUrl}/subscribers/all`);
    return allSubscribersResult.data.map((response) => {
        return {
            id: response.id,
            name: response.name,
            email: response.email
        };
    });
});
//# sourceMappingURL=exercicio02.js.map