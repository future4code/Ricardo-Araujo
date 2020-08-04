/*
Você deve implementar uma função que recebe um array de números e complete o array com **todos os números faltantes** 
entre o maior e o menor número. O retorno deve ser esse array completado **ordenado**. Veja os exemplos abaixo:

- Para a entrada `[8, 3, 1]` o retorno deve ser `[1, 2, 3, 4, 5, 6, 7, 8]`
- Para a entrada `[10, 20, 17, 22]`, o retorno deve ser `[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]`
- Para a entrada `[3, 1, 2]`, o retorno deve ser `[1, 2, 3]`
- Para a entrada `[101, 102, 103, 104]`, o retorno deve ser `[101, 102, 103, 104]`
- Para e entrada `[]`, o retorno deve ser `[]`

*/


function completeArray(inputArray:number[]){

    let minor = inputArray[0];
    let bigger = inputArray[0];

    for(let i = 0; i<inputArray.length; i++){

        if(inputArray[i]>bigger){
            bigger = inputArray[i];
        }else if(inputArray[i]<minor){
            minor = inputArray[i];
        };
    };

    const result:number[] = [];

    for(let i = minor; i<=bigger; i++){
        result.push(i);
    };
    
    return result;
};

const bla:number[] = [4,8];

console.log(completeArray(bla));