import {Character} from "../src/models/Character";
import {performAttack} from "../src/services/performAttack";

describe("performAttack", ()=>{

    test("4.b mock que representa sucesso", ()=>{

        const validatorMock = jest.fn(() => {
			return true
		});


        const charmander: Character = {
            name: "Charmander",
            life: 10,
            strength: 15,
            defense: 10
        };
        
        const bulbasaur: Character = {
            name: "Bulbasaur",
            life: 10,
            strength: 15,
            defense: 10
        };

        const test = performAttack(charmander, bulbasaur, validatorMock);

        expect(bulbasaur.life).toBe(5);
    });

    test("4.b mock que representa falha", ()=>{

        const validatorMock = jest.fn(() => {
			return false
		});


        const charmander: Character = {
            name: "Charmander",
            life: 10,
            strength: 15,
            defense: 10
        };
        
        const bulbasaur: Character = {
            name: "Bulbasaur",
            life: 10,
            strength: 15,
            defense: 10
        };

        try{
            const test = performAttack(charmander, bulbasaur, validatorMock);

       }catch(error){
           expect(error.message).toBe("Invalid character");
       };

       expect.assertions(1);
    });


});