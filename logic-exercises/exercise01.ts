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