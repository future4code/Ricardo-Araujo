import { findSumTarget } from "../src/exercise23"

describe('findSumTarget', ()=>{
    it('should find correctly',()=>{
        const input = [4,5,10,12,21]
        const target = 25

        expect(findSumTarget(input, target)).toEqual(
            [{value: 4, index: 0}, {value: 21, index: 4}]
        )
    })
    it('should find if duplicated values',()=>{
        const input = [4,5,4,12,21]
        const target = 25

        expect(findSumTarget(input, target)).toEqual(
            [{value: 4, index: 2}, {value: 21, index: 4}]
        )
    })
    it("should return null if doesn't find sum", ()=>{
        const input = [4,5,10,12,21]
        const target = 27

        expect(findSumTarget(input, target)).toEqual(null)
    })
})