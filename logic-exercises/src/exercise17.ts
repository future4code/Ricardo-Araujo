/*
O objetivo desse challenge é te fazer pensar como um método que a gente usa bastante com strings: 
.indexOf. Escreva uma função que simule o seu comportamento (sem utilizar esse método na sua implementação), 
que receba uma string source e um caracter que se deseja encontrar nela query e 
devolva o index em que esse caracter aparece pela primeira vez
*/

export function myIndexOf(input:string, char:string):number{

    for(let i=0; i<input.length; i++){

        const word = makeWord(input, i, char.length);

        if(word===char){
            return i;
        };
    };

    return -1;
};


function makeWord(input:string, index:number, length:number):string{

    const word:string[] = [];

    for(let i = index; i<(index+length); i++){
        word.push(input[i]);
    };

    return word.join("");
};


// console.log(myIndexOf("vi veri veniversum vivus vici", "iversum vi"));

// const teste = "vi veri veniversum vivus vici"

// console.log(teste.indexOf("iversum vi"));