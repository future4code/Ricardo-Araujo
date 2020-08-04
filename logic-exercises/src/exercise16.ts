/*
Implemente uma função que receba um array (ordenado ou não) com números de 1 a 100. 
Você sabe que, nesse array, está faltando apenas **um** número dentro desse intervalo. A sua função deve retornar o número faltante. 
Há dois exemplos abaixo com o array ordenado para facilitar o entendimento da questão. Entretanto, não assuma que ele esteja ordenado para implementar a função!

- Para a entrada `[1, 2, 3, ... , 45, 46, 48, 49, ... , 100]`, o retorno deve ser `47`
- Para a entrada `[1, 2, 3, ... , 69, 71, 72, ... , 100]`, o retorno deve ser `70`

Além disso, faça, ao menos, **dois testes automatizados** da sua função.
*/
export function findMissing(input:number[]):number | void{
    const ordenatedInput = input.sort((a,b)=> a-b);

    for(let i=1; i<ordenatedInput.length; i++){
        if(ordenatedInput[i] !== (ordenatedInput[i-1]+1)){
            return (ordenatedInput[i-1]+1);
        };
    };
};

const testArray = [1,2,3,4,6];

// console.log(findMissing(testArray));