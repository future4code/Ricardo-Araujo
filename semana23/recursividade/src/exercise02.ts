/*
Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n
*/


export function sumNumbers(input:number, acc:number=0):number{
    if(input===0){
        return acc;
    };
    acc = acc + input;
    const n = input-1;

    return sumNumbers(n,acc);
};