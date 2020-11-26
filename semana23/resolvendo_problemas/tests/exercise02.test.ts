import {stringCompression} from "../src/exercise02";

describe("Exercise02", ()=>{
    
    test("return compressedString",()=>{

        expect(stringCompression("aabbb")).toBe("a2b3");
        expect(stringCompression("aabcccccaaa")).toBe("a2b1c5a3");
        expect(stringCompression("accuraaaaaaaaaate")).toBe("a1c2u1r1a10t1e1");
    });

    test("return originalString",()=>{
        expect(stringCompression("accurate")).toBe("accurate");
        expect(stringCompression("escola")).toBe("escola");
    });
});