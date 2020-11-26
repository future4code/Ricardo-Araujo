/*
Exercício de lógica - Contar números negativos em matriz ordenada

Escreva uma função que recebe uma matriz (um array de arrays) que está ordenada em ordem **decrescente** tanto na linha quanto na coluna, e retorna quantos **números negativos** tem nessa matriz.

Exemplos para melhor entendimento:

- Exemplo 1

    **Input:** `[[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]`

    **Output:** `8`

    **Explicação:** Existem 8 números negativos na matriz.

- Exemplo 2

    **Input:** `[[3,2],[1,0]]`

    **Output:** `0`

- Exemplo 3

    **Input:** `[[1,-1],[-1,-1]]`

    **Output:** `3`

- Exemplo 4

    **Input:** `[[-1]]`

    **Output:** `1`
*/

export function countMatrixNegative(input: any[]){
    return input.reduce((acc , curr)=>{

        for(let i = curr.length-1; i>=0; i--){

            if(curr[i]<0){
                acc++
            }else{
                break
            }
        }

        return acc
    },0)    
}

// const input = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]

// console.log(countMatrixNegative(input))