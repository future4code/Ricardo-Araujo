import { countMatrixNegative } from "../src/exercise24"

describe('countMatrixNegative', ()=>{
    it('should count properly', ()=>{
        const input1 = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]] 
        expect(countMatrixNegative(input1)).toEqual(8)

        const input2 = [[3,2],[1,0]] 
        expect(countMatrixNegative(input2)).toEqual(0)

        const input3 = [[1,-1],[-1,-1]] 
        expect(countMatrixNegative(input3)).toEqual(3)

        const input4 = [[-1]] 
        expect(countMatrixNegative(input4)).toEqual(1)
    })
})