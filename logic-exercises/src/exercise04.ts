/*
Resolva os exercícios em arquivos typescript. Testes são bem-vindos.

a. Faça uma função que receba uma string e identifique se ela só possui números. 
Deve retornar `false` se possuir qualquer outro tipo de caracter; e `true`, se só possuir números.

*/


function checkItsANumber(value:string){

    const numValue:number = Number(value);

    if(isNaN(numValue)){
        return false;
    }else{
        return true;
    };
};

const teste = checkItsANumber("a");

console.log(teste);
