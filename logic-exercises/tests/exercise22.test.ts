import {checkAnagrams} from "../src/exercise22";

describe("checkAnagrams", ()=>{
    it("case true", ()=>{
        const mockT = "ricardo";
        const mockS = "doricar";
        
        const func = checkAnagrams(mockT, mockS);

        expect(func).toBe(true);
    });
    it("case false", ()=>{
        const mockT = "ricardo";
        const mockS = "ricard";
        
        const func = checkAnagrams(mockT, mockS);

        expect(func).toBe(false);
    });
    it("case true upercase", ()=>{
        const mockT = "ricardo";
        const mockS = "carDoRi";
        
        const func = checkAnagrams(mockT, mockS);

        expect(func).toBe(true);
    });
});