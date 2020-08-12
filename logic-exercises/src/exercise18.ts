/*
Escreva uma função que recebe uma string que pode conter somente os 
seguintes caracteres: `'('`,  `')'`,  `'['`,  `']'`,  `'{'`,  `'}'` , 
e retorna `true` para uma string válida, e `false` para uma inválida.

Uma string é **válida** se:

1. Parênteses (ou chaves, ou colchetes) abertos devem ser fechados 
pelo mesmo tipo de parênteses (ou chaves, ou colchetes).
2. Parênteses (ou chaves, ou colchetes) abertos devem ser fechados 
na mesma ordem que foram abertos.

Obs. Uma string vazia é considerada **válida**.
*/

export function checkBrackets(input:string){

    const stack:string[] = [];

    for(const char of input){

        if( char === "(" ||
            char === "[" ||
            char === "{"
        ){
            stack.push(char);
        }else{
            const lastOpenBracket = stack.pop();

            if(!lastOpenBracket){
                return false;
            };

            if(
                lastOpenBracket === "(" && char !== ")" ||
                lastOpenBracket === "[" && char !== "]" ||
                lastOpenBracket === "{" && char !== "}"
            ){
                return false;
            };

        };
    };

    if(stack.length>0){
        return false;
    };

    return true;
};