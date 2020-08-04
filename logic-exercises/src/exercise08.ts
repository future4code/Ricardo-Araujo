/*
Esse exercício será uma continuação do challenge; então, se você não conseguiu fazer ainda, essa é a hora. 
Nós vamos modificar a funcionalidade da função: somente quando o número passado seja menor do que o menor elemento do array, 
você deve devolver um novo array com todos os elementos desde o número passado até o último elemento do array. 
Considerando que o array seja `[2, 3, 4]` e a entrada `0`, a saída deve ser: `[0, 1, 2, 3, 4]`. 

Para resumir as funcionalidades, há três exemplos com as chamadas dessa função e a resposta desejada:

```tsx
fillArray([11, 15, 17], 20) // saída [11, 15, 17, 18, 19, 20]
fillArray([100, 310, 520], 200) // saída [100, 310, 520]
fillArray([14, 78, 90], 10) // sáida [10, 11, 12, 13, 14, 78, 90]
```
*/


function extendsArray(initialArray: number[], increment: number):number[]{

    const sortedArray = initialArray.sort((a,b)=> a-b);
    let result:number[] = sortedArray;

    if(increment<sortedArray[0]){
        const newArray = [];

        while(increment<sortedArray[0]){
            newArray.push(increment);
            increment++
        };
        
        result = newArray.concat(sortedArray);
        
    }else if(sortedArray[sortedArray.length-1]<increment){

        while(sortedArray[sortedArray.length-1]<increment){

            result.push(sortedArray[sortedArray.length-1]+1);
        };
        

    };

    return result;
};

const test8 = [4,6,3,5];

console.log(extendsArray(test8, 19));