import { validateCharacter} from "../src/services/validateCharacter";

describe("validateCharacter", ()=>{

    test("2.a. personagem com o nome vazio", ()=>{

        const mockCharacter={
            name: "",
            life: 100,
            strength: 100,
            defense: 100
        };

        const test = validateCharacter(mockCharacter);

        expect(test).toBe(false);
    });

    test("2.b. personagem com vida vazia", ()=>{

        const mockCharacter={
            name: "Teste",
            life: 0,
            strength: 100,
            defense: 100
        };

        const test = validateCharacter(mockCharacter);

        expect(test).toBe(false);
    });

    test("2.c personagem com força vazia", ()=>{
        
        const mockCharacter1={
            name: "Teste",
            life: 10,
            strength: 0,
            defense: 100
        };

        const mockCharacter2={
            name: "Teste",
            life: 10,
            strength: -1,
            defense: 100
        };


        const test1 = validateCharacter(mockCharacter1);
        const test2 = validateCharacter(mockCharacter2);
        
        expect(test1).toBe(true);
        expect(test2).toBe(false);
    });

    test("2.d personagem com defesa vazia", ()=>{
        
        const mockCharacter1={
            name: "Teste",
            life: 10,
            strength: 111,
            defense: 0
        };

        const mockCharacter2={
            name: "Teste",
            life: 10,
            strength: 111,
            defense: -1
        };


        const test1 = validateCharacter(mockCharacter1);
        const test2 = validateCharacter(mockCharacter2);
        
        expect(test1).toBe(true);
        expect(test2).toBe(false);
    });

    test("2.g. personagem valido", ()=>{

        const mockCharacter={
            name: "teste",
            life: 100,
            strength: 100,
            defense: 100
        };

        const test = validateCharacter(mockCharacter);

        expect(test).toBe(true);
    });
});