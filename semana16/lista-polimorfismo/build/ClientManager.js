"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientManager = void 0;
class ClientManager {
    constructor() {
        this.clients = [];
    }
    getClientsQuantity() {
        return this.clients.length;
    }
    ;
    addClient(newClient) {
        this.clients.push(newClient);
        return;
    }
    ;
}
exports.ClientManager = ClientManager;
;
//# sourceMappingURL=ClientManager.js.map