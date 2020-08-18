import { getSimilarPrefix} from "../src/exercise19";

describe("exercise19", ()=>{
    it("case1", ()=>{
        const mock = ["flower","flow","flight"];
        const func = getSimilarPrefix(mock);

        expect(func).toBe("fl");
    });
    it("case2", ()=>{
        const mock = ["dog","racecar","car"];
        const func = getSimilarPrefix(mock);

        expect(func).toBe("");
    });
    it("case3", ()=>{
        const mock = ["coracao","cor","corona","coreia"];
        const func = getSimilarPrefix(mock);

        expect(func).toBe("cor");
    });
});