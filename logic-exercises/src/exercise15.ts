/*
Implemente uma função que receba um array (ordenado ou não) com números 1 a 100. Você sabe que, nesse array, 
está faltando apenas **um** número dentro desse intervalo. A sua função deve retornar o número faltante. 
Há dois exemplos abaixo com o array ordenado para facilitar o entendimento da questão. Entretanto, não assuma que ele esteja ordenado para implementar a função!

- Para a entrada `[1, 2, 3, ... , 45, 46, 48, 49, ... , 100]`, o retorno deve ser `47`
- Para a entrada `[1, 2, 3, ... , 69, 71, 72, ... , 100]`, o retorno deve ser `70`

Além disso, faça, ao menos, **dois testes automatizados** da sua função.

*/

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