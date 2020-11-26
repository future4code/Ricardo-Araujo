import {myIndexOf} from "../src/exercise17";

describe("exercise17",()=>{
    test("compare with method", ()=>{

        const mockString = "vi veri veniversum vivus vici";
        const mockSearch = "iversum vi";

        const myFunction = myIndexOf(mockString, mockSearch);
        const jsMethod = mockString.indexOf(mockSearch);

        expect(myFunction).toEqual(jsMethod);
    });

    test("not find string", ()=>{
        const mockString = "ricardo";
        const mockSearch = "h";

        const myFunction = myIndexOf(mockString, mockSearch);

        expect(myFunction).toEqual(-1);
    });

    test("one letter", ()=>{
        const mockString = "ricardo";
        const mockSearch = "a";

        const myFunction = myIndexOf(mockString, mockSearch);
        const jsMethod = mockString.indexOf(mockSearch);

        expect(myFunction).toEqual(jsMethod);
    });
})