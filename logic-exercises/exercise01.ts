/*
Resolva os exercícios em arquivos typescript. Testes são bem-vindos.

a. Faça uma função que receba um `array` de números e devolva um objeto que contenha as informações: soma de todos os itens, 
quantidade de itens e multiplicação de todos os itens

b. Faça uma função que receba um `array` de números e devolve um objeto que contenha as informações: maior número e menor número

*/

//a.
type result = {
    total: number,
    multiplication: number,
    quantity: number
};

function calc(array:number[]):result{

    let total:number = 0;
    let multiplication:number = 1;

    for(let i = 0; i<array.length; i++){
        total = total + array[i];
        multiplication = multiplication * array[i];
    };

    const result: result = {
        total,
        multiplication,
        quantity: array.length
    };

    return result;
};

const testeArray = [2,3];

console.log(calc(testeArray));

//b.

type extremes = {
    min: number,
    max: number
};

function findExtremes(array:number[]):extremes{

    let min: number = array[0];
    let max: number = array[0];

    for(let i = 0; i<array.length; i++){

      if(max<array[i]){
        max = array[i];
      }else if(min>array[i]){
        min = array[i];
      }
    };

    const result: extremes ={
        min,
        max
    };

    return result;
};


const arrayTeste2 = [2];

console.log(findExtremes(arrayTeste2));