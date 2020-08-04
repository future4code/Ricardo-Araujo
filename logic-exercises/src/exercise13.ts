/*
Hoje, nós vamos fazer um "somador" de números um pouco diferente. 
Ele será rodada no terminal (como um script) e funciona da seguinte maneira: 
o usuário tem que inserir cada um dos números que desejar somar seguido de um *enter;* quando o usuário digitar `0`, 
você deve imprimir o resultado da soma de todos esses números no terminal e encerrar a execução do script. 
Veja abaixo um gif que tem o comportamento esperado:
*/

import readline from "readline";

function sum(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => rl.question("", (ans:string)=>{
        rl.close();
        resolve(ans);
    }));
};

async function main(){

    let total:number = 0;
    let input:number = Infinity;

    console.log("Insira os numeros que deseja somar. Ao digitar '0', a soma será calculada");

    while(input!==0){
        const newInput = await sum();
        input = Number(newInput);
        total = total + input;
    };

    console.log("\ntotal: " + total);
};

main();