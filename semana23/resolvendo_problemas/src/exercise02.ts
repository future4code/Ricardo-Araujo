/*
Implemente um método que performe uma compressão de string usando a contagem dos 
caracteres repetidos em sequência. Caso o resultado final tamanho maior 
do que a string inicial, seu programa deve retornar a string inicial

exemplos:
Para o input `aabbb` o resultado deve ser `a2b3`

Para o input `aabcccccaaa` o resultado deve ser `a2b1c5a3`

Para o input `accurate` o resultado deve ser `accurate` (já que inicialmente o código retornaria `a1c2u1r1a1t1e1` que possui o tamanho maior do que `accurate`)

Para o input `escola` o resultado deve ser `escola` (já que inicialmente o código retornaria `e1s1c1o1l1a1` que possui o tamanho maior do que `escola`)

Para o input `accuraaaaaaaaaate`, o resultado deve ser `a1c2u1r1a10t1e1`
*/

// export function stringCompression(input:string):string{
    
//     const hash = new Map<string, number>();

//     for(const char of input){
//         if(hash.get(char)){
//             const curr:number = hash.get(char) as number;
//             hash.set(char, curr+1);
//         }else{
//             hash.set(char, 1);
//         };
//     };

//     if(hash.size>=input.length){
//         return input;
//     };

//     const result = Array.from(hash).reduce((acc, curr)=>{
//         return `${acc}${curr[0]}${curr[1]}`;
//     },"");
    
//     return result;
// };

// console.log(stringCompression("escola"));

export function stringCompression(input:string):string{
    
    let compressed = "";

    for(let i=0;i<input.length;i++){
        let quant = 1;

        while(input[i] === input[i+1]){
            quant++;
            i++;
        };

        compressed = `${compressed}${input[i]}${quant}`
    };

    if(compressed.length>=input.length){
        return input;
    };

    return compressed;
};

console.log(stringCompression("escola"));