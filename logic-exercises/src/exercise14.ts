/*
Escreva uma função que receba um número inteiro (positivo ou negativo, sem vírgulas) e devolva quantos algarismos ele possui. Abaixo, há 3 exemplos:

- Para a entrada `0`, deve retornar `1`
- Para a entrada `2`, deve retornar `1`
- Para a entrada `3278`, deve retornar `4`
- Para a entrada `-59`, deve retornar `2`
*/


function checkSize(value:number):number{
    const aux = value.toString();
    return aux.length;
};

console.log(checkSize(4));