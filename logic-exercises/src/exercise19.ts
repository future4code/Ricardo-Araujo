/*
Escreva uma função que receba um array de strings e retorne o maior prefixo comum entre **todas** as strings.

O prefixo é definido pelo começo até uma posição qualquer de uma string. Por exemplo, na string `"arvore"`, `"a"` seria um prefixo, e `"arvor"` também.

Caso não exista um prefixo comum, retorne uma string vazia (`""`)

Seguem exemplos para melhor entendimento:
**Input**: `["flower","flow","flight"]`
**Output:** `"fl"`

**Input**: `["dog","racecar","car"]`
**Output:**  `""`
**Explicação:** Não existe prefixo comum.

**Input**: `["coracao","cor","corona","coreia"]`
**Output:** `"cor"`
*/

export function getSimilarPrefix(input:string[], char:number=0, result:string[] = []):string{

    if(input[0].length === char){
        return result.join("");
    };

    for(let i=1; i<input.length; i++){
        if(input[i-1][char] !== input[i][char]){
            return result.join("");
        };
    };

    result.push(input[0][char]);

    return getSimilarPrefix(input, char+1, result);
};

// const testeInput = ["coracao","cor","corona","coreia"];

// console.log(getSimilarPrefix(testeInput));