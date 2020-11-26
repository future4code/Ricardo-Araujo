import {findMissing} from "../src/exercise16";


describe("exercise16",()=>{

    test("test find missin value",()=>{

        const mockArray = [1,2,3,5,4,6,8];
        const mockArray2 = [3,2,4,1,8,7,6]

        expect(findMissing(mockArray)).toBe(7);
        expect(findMissing(mockArray2)).toBe(5);
    });

});