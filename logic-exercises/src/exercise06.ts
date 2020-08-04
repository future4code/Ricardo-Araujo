/*
Escreva uma função que receba uma string e determine a sua reversa (com as letras de trás para frente). Para a entrada escola, deve retornar alocse

*/

function reverseWord(word:string):string{
    
    let reverse = "";

    for(let i = (word.length-1); i>=0; i--){
        reverse = reverse+word[i];
    };

    return reverse;
};

console.log(reverseWord("Ricardo"));