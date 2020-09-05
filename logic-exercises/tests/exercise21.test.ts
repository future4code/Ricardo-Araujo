import {solitaryNumber} from "../src/exercise21";

describe("Test", ()=>{
    it("case1", ()=>{
        const mock = [2,2,4,6,4,3,2,2,3];
        const func = solitaryNumber(mock);

        expect(func).toBe(6);
    });
});