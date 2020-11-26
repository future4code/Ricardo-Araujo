/*
O exercício de hoje vai depender que você tenha entendido bem os conceitos que exigimos durante o *challenge*. 
Por isso, te convidamos a abrir algum atendimento caso não tenha concluído ou entendido. 

Quando fazemos scripts para serem rodados no terminal, é muito comum precisar que o usuário indique algumas informações para nós. 
Já vimos uma forma de fazer isso, utilizando o `process.argv`. Entretanto, ele tem uma limitação: o usuário só pode indicar os valores no momento em que ele roda a função; 
não podendo inserir ao longo de sua execução. 

O seu objetivo é imitar o comportamento do gif abaixo:

O exercício de hoje vai depender que você tenha entendido bem os conceitos que exigimos durante o *challenge*. 
Por isso, te convidamos a abrir algum atendimento caso não tenha concluído ou entendido. 

Quando fazemos scripts para serem rodados no terminal, é muito comum precisar que o usuário indique algumas informações para nós. 
Já vimos uma forma de fazer isso, utilizando o `process.argv`. Entretanto, ele tem uma limitação: o usuário só pode indicar os valores no momento em que ele roda a função; 
não podendo inserir ao longo de sua execução. 

O seu objetivo é imitar o comportamento do gif abaixo:
*/

import readline from "readline";

function askQuestion(query:string) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, (ans:any) => {
        rl.close();
        resolve(ans);
    }))
}

async function main(){
    const name = await askQuestion("Qual seu nome ?\n");
    const age = await askQuestion("Qual a sua idade?\n");
    console.log("\nSuas informações são:");
    console.log("name: " + name + "   idade: " + age );
};

main();
