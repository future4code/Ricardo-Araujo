import { performPurchase, User} from "../src/exercicio01_02";


describe("Exercicio 01", ()=>{
    const mockUser: User = {
        name: "Usuario Teste",
        balance: 100
    };

    test("compra com valor menor que saldo", ()=>{

        const test = performPurchase(mockUser, 90);

        expect(test.balance).toBe(10);
    });


    test("Compra com valor maior que saldo", ()=>{

        const test = performPurchase(mockUser, 110);

        expect(test).toBe(undefined);
    });

    test("Compra saldo igual valor de compra", ()=>{

        const test = performPurchase(mockUser, 100);

        expect(test.balance).toBe(0);
    });
});