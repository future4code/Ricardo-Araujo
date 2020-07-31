/*
Escreva uma função recursiva que consiga imprimir todos os elementos de um array
*/

export function printArray(inputArray:any[], index:number = inputArray.length-1){
    if(index>=0){
        printArray(inputArray, index-1);
        console.log(`${index}: ${inputArray[index]}`);
    };
};