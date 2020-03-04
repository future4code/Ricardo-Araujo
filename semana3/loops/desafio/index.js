//desafio 1

/*
console.log("testes");

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
// é impresso no console
0
00
000
0000

*/


/*
//desafio 2

const numero = Number(prompt("escolha o número inteiro que deve ser adivinhado"));
let chute;
let i;

console.log("Vamos jogar!");
console.log("");
 

for (i = 0;numero!==chute;i++){

    chute = Number(prompt("Escolha seu chute"));
    
    if (chute>numero){
        console.log("O número chutado foi: " + chute);
        console.log("Errrrrrrrrou, o número escolhido é menor");
        console.log("");
    }
    if (chute<numero) {
        console.log("O número chutado foi: " + chute);
        console.log("Errrrrrrrrou, o número escolhido é maior");
        console.log("");
    }

}

console.log("O número chutado foi: " + chute);
console.log("Acertou!!")
console.log("");
console.log("número de tentativas: " + i);
*/

/*
//desafio 3

const numero = Math.floor((Math.random() * 100) + 1);
let chute;
let i;

console.log("Vamos jogar!");
console.log("");
 

for (i = 0;numero!==chute;i++){

    chute = Number(prompt("Escolha seu chute"));
    
    if (chute>numero){
        console.log("O número chutado foi: " + chute);
        console.log("Errrrrrrrrou, o número escolhido é menor");
        console.log("");
    }
    if (chute<numero) {
        console.log("O número chutado foi: " + chute);
        console.log("Errrrrrrrrou, o número escolhido é maior");
        console.log("");
    }

}

console.log("O número chutado foi: " + chute);
console.log("Acertou!!")
console.log("");
console.log("número de tentativas: " + i);

//para implementação da alteração foi simples, precisei alterar apenas 1 linha do código,
//porém ainda não tenho total clareza sobre a sintaxe utilizada, estou usando pois segui a instrução 
//do w3school, porém ainda não tenho compreensão total sobre a mesma.

*/