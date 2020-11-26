/*
Resolva os exercícios em arquivos typescript. Testes são bem-vindos

a. Faça uma função que receba duas strings e devolva se elas são iguais, **considerando** 
se os caracteres estão em maiúsculo ou minúsculo. Ex.: deve retornar `true` para as entradas `escola` e `escola`; 
mas retornar `false` para `escola` e `Escola`

b. Faça uma função que receba duas strings e devolva se elas são iguais, **ignorando** 
se os caracteres estão em maiúsculo ou minúsculo. Ex.: deve retornar `true` para as entradas `escola` e `Escola` ou `escola` e `EsCoLA`

*/

function checkItsEqual(a:string, b:string){
    if(a === b){
        return true;
    }else{
        return false;
    };
};

function hardCheckItsEqual(a:string, b:string){
    const aPos = a.toLowerCase();
    const bPos = b.toLowerCase();

    if(aPos === bPos){
        return true;
    }else{
        return false
    };
};

console.log(checkItsEqual("escola", "escola"));
console.log(hardCheckItsEqual("escola", "escola"));
