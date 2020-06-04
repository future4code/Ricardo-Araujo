import {Client} from "./Client";
import {Place} from "./Place";
import {Residence} from "./Residence";
import {Commerce} from "./Commerce";
import { Industry } from "./Industry";
import {ClientManager} from "./ClientManager";
import {ResidentialClient} from "./ResidentialClient";
import {CommercialClient} from "./CommercialClient";

//exercicio 01 - a. foi possível imprimir todas as propriedades

// const newClient: Client = {
//     name: "Joao",
//     registrationNumber: 151,
//     consumedEnergy: 84,
  
//     calculateBill: () => {
//       return 2;
//     }
// }

// console.log(newClient.name);
// console.log(newClient.registrationNumber);
// console.log(newClient.consumedEnergy);
// console.log(newClient.calculateBill());


//exercicio 02
// const newPlace = new Place("080587-12");

// a. Cannot create an instance of an abstract class.

// b. seria necessário criar uma classe que implementa esta interface, sendo assim possível usar.



//exercicio 03
// a. idem anterior
// b. ela tem definido um método, então não poderia ser uma interface
// c. Pois ela não tem estrutura suficiente para ser criado intancias de Place, já que place é apenas um cpf

// const newResidence = new Residence(32, "21030-23");

// const newCommerce = new Commerce(4, "39202-21");

// const newIndustry = new Industry(200, "32340-03");

// console.log(newResidence.getResidentsQuantity());

// console.log(newCommerce.getFloorsQuantity());

// console.log(newIndustry.getMachinesQuantity());


//exercicio 04
//a. todos os que são requisitados na interface Client e os da classe Residence


//exercicio 05
//a. ambas herdam Place, e ambas usam a interface Client
//b. mudam o nome do atributo de quantidade e fator de multiplicação do valor de memória

//exercicio 07

// const newManager = new ClientManager();

// newManager.addClient(newClient);
// newManager.addClient(newClient);

// console.log(newManager.getClientsQuantity());

//exercicio 08

const newManager = new ClientManager();

const newResidencialClient = new ResidentialClient(3, "39234-02", "Novo Cliente residencial", "322.423.423-23", 3, 43);

const newCommercialClient = new CommercialClient("32223-32", 23, "2344.234", "FutureX", 23, 523);

newManager.addClient(newResidencialClient);
newManager.addClient(newCommercialClient);

console.log(newManager.getClientsQuantity());