/*
Escreva uma função que receba uma Matriz, o índice da linha, o índice da coluna e um valor. Essa função deve alterar 
o elemento das linha e coluna em questão pelo valor passado. (Caso não tenha nenhum valor nos índices passados, 
retorne um erro: Fora do intervalo da matriz)
*/

export function matrix(input:any[][], row:number, column:number, newValue:string|number){

    if(input[row][column] !== undefined){
        input[row][column] = newValue;
    }else{
        return "Fora do intervalo da matriz"
    };

    return input;
};

const biMatrix = [[1,2,3],[3,4]]

console.log(biMatrix);

console.log(matrix(biMatrix, 1, 1, 10));