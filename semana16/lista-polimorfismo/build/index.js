"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClientManager_1 = require("./ClientManager");
const ResidentialClient_1 = require("./ResidentialClient");
const CommercialClient_1 = require("./CommercialClient");
const newManager = new ClientManager_1.ClientManager();
const newResidencialClient = new ResidentialClient_1.ResidentialClient(3, "39234-02", "Novo Cliente residencial", "322.423.423-23", 3, 43);
const newCommercialClient = new CommercialClient_1.CommercialClient("32223-32", 23, "2344.234", "FutureX", 23, 523);
newManager.addClient(newResidencialClient);
newManager.addClient(newCommercialClient);
console.log(newManager.getClientsQuantity());
//# sourceMappingURL=index.js.map