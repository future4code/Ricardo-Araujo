/*
O número solitário
Escreva uma função que recebe um array **não vazio** de números. Todos os números do array aparecem 2 vezes, com excessão de um. Encontre (e retorne) esse número.
*/

export function solitaryNumber(input: number[]): number | null{

    const hash = new Map;

    for(const number of input){

        if(hash.get(number)){
            const count = hash.get(number) + 1;
            hash.set(number, count);
        }else{
            hash.set(number, 1);
        };
    };

    const values = hash.keys();
    
    for(const value of values){
        if(hash.get(value) === 1){
            return value;
        };
    };

    return null;
};