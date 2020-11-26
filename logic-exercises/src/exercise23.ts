/*
Escreva uma função que recebe um array de números `nums` e um `target` e retorna os **indíces** dos dois elementos que somam o valor do **target**.

Você pode assumir que qualquer input possível sempre terá **exatamente** 1 solução, e você não pode usar o mesmo elemento duas vezes.

Desafio:
Resolva o problema usando uma complexidade linear de tempo (O(N)). Isso significa que você só deve iterar o array uma vez para encontrar o número.

Exemplos para melhor entendimento:

Exemplo 1:
**Input:** `nums=[2, 7, 11, 15]` `target=9`

**Output:** `[0,1]`

**Explicação:** O elemento no index 0 (2) somado com o elemento no index 1 (7) dão 9, que é o *target*


Exemplo 2:
**Input:** `nums=[4, 5, 10, 12, 21]` `target=17`

**Output:** `[1,3]`

**Explicação:** O elemento no index 1 (5) somado com o elemento no index 3 (12) dão 17, que é o *target*
*/

export function findSumTarget(input: number[], target: number){
    const hash = new Map

    for(let i = 0; i < input.length; i++){

        const missing = target-input[i]

        if(hash.has(missing)){
            const firstEntry = hash.get(missing)

            return [{value: missing, index: firstEntry}, {value: input[i], index: i}]
        }else{
            hash.set(input[i], i)
        }
    }

    return null
}

// const input = [4,5,10,12,21]
// const target = 25

// console.log(findSumTarget(input, target))