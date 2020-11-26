import { checkBrackets } from "../src/exercise18";

describe("exercise18", ()=>{
    it("cases1", ()=>{

        const mock = "()";
        const check = checkBrackets(mock);

        expect(check).toEqual(true);
    });
    it("cases2", ()=>{

        const mock = "()[]{}";
        const check = checkBrackets(mock);

        expect(check).toEqual(true);
    });
    it("cases3", ()=>{

        const mock = "(]";
        const check = checkBrackets(mock);

        expect(check).toEqual(false);
    });
    it("cases4", ()=>{

        const mock = "([)]";
        const check = checkBrackets(mock);

        expect(check).toEqual(false);
    });
    it("cases5", ()=>{

        const mock = "{[]}";
        const check = checkBrackets(mock);

        expect(check).toEqual(true);
    });
});