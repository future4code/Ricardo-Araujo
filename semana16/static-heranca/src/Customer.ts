/*
a. 1 vez

b. 1 vez

*/


import {User} from "./User";

export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    };
  
    public getCreditCard(): string {
      return this.creditCard;
    };
};

// const newCustomer = new Customer("bola", "agua@gmail.com", "Pessoa com dinheiro", "senhaDificil", "Visa");

// console.log(newCustomer);

// console.log(newCustomer.getId());
// console.log(newCustomer.getEmail());
// console.log(newCustomer.getName());
// console.log(newCustomer.getCreditCard());

// console.log(newCustomer.introduceYourself());
/*
exercicio 03

a. não, pois é uma propriedade privada, e não temos nenhum método para acessar esta informação

*/
