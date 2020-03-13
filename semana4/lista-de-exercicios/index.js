/*

//interpretação de código

1. converte 100 dolares em reais, solicitando para o usuario digitar o valor da cotação
 do dia, e imprime no console o resultado da conversão.

2. são duas constantes que chamam uma função que informando o tipo de investimento e valor, ela
retorna o valor após investimento. No console será impresso os valores após investimento: 165 e tipo do investimento informado incorreto.

3.imprime no console a quantidade de numeros do console, a quantidade de numeros pares e a quantidade de numeros impares

4.separa o menor e maior numero da array, retornando -10 e 121;

// Exercícios de Lógica de Programação

1. algotitmo que percorre e ordena uma lista

let arrayDesordenado = [19, 4, 6, 3, 4, 1, 14];
let menor = arrayDesordenado[0];
let arrayOrdenada = [];
let indexMenor;

console.log("Array desordenada " + arrayDesordenado);


arrayDesordenado.forEach((elemento,index,array)=>{

	//->Acha o menor
for (let indice = 0; indice<arrayDesordenado.length; indice++){

	if (arrayDesordenado[indice] < menor) {
		menor = arrayDesordenado[indice];
		indexMenor = indice;

	}
}

arrayOrdenada.push(menor);
menor = arrayDesordenado[0];
console.log("arrayOrdenada "+ arrayOrdenada);

let arrayAuxiliar=[];
	//tiro o menor -> daria para fazer com filter, na real acho que vou fazer isto no fds.
for (let id = 0; id<arrayDesordenado.length; id++){

	if(id !== indexMenor){
		arrayAuxiliar.push(arrayDesordenado[id]);
	}
}

arrayDesordenado=arrayAuxiliar;
console.log("Nova Array desordenada " + arrayDesordenado)

})

console.log("Terminou -> Array ordenada " + arrayOrdenada);

2. -> a. false // b. false // c. true // d. true // e.true;

3. // o código do nosso amigo, não tinha condição de parada, e faltava uma forma de filtrar a paridade do numero;

const quantidadeDeNumerosPares = Number(prompt());

let numerosPares=0;

for(let i=0;numerosPares<quantidadeDeNumerosPares;i++){
    
    if(i%2===0){
    console.log(i);
    numerosPares++
    }

}

4. // coloquei também uma checagem para garantir que o valor digitado seja de um triangulo.

function triangulo(a, b, c) {

    if ((a > 0 && b > 0 && c > 0) && (a !== undefined && b !== undefined && c !== undefined)) {
        if (a === b && b === c) {
            return "equilátero";
        } else if (a === b || a === c || b === c) {
            return "isóceles";
        } else if (a !== b && b !== c && c !== a) {
            return "escaleno";
        }
    }
    else{
        return "digite os valores corretamente";
    }

}

const meuTriangulo = triangulo(-5,5,7);

console.log(meuTriangulo);

5. */


