/*
a.Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente
b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente
*/


export function printNumbersAsc(inputNumber: number, atual:number=0):void{
    console.log(atual);
    atual++;

    if(atual<=inputNumber){
        printNumbersAsc(inputNumber, atual);
    };
};

export function printNumberDesc(inputNumber:number, atual: number = inputNumber):void{
    console.log(atual);
    atual--;

    if(atual>=0){
        printNumberDesc(inputNumber, atual);
    };
};