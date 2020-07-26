function completeValues(currentValue:number, previousValue:number, array:number[]):void{

    for(let i=previousValue+1; i<currentValue; i++){
        array.push(i);
    };

};

function findMissingValues(value:number[]):number[]{
    const ordenedArray = value.sort((a,b)=>a-b);
    const missingValues:number[] = []

    for(let i=1;i<ordenedArray.length;i++){
        const expectedValue = ordenedArray[i-1]+1;
        
        if(ordenedArray[i]!==expectedValue){
            completeValues(ordenedArray[i], ordenedArray[i-1], missingValues);
        };

    };

    return missingValues;
};

const randomVector = [1,2,3,4,6,7,8];

console.log(findMissingValues(randomVector));