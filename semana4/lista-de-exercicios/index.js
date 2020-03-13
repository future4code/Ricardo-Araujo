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
	//tiro o menor -> acho que daria para fazer com filter, na real acho que vou tentar isto no fds.
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

5. 
qualMaior(25, 50);

function qualMaior(a, b) {

    let maior = a;
    let menor = b;

    if (a === b) {
        console.log("Os numeros são iguais");
    } else {
        if (a > b) {
            console.log("O maior é: " + a);
            maior = a;
            menor = b;
        } else {
            console.log("O maior é: " + b);
            maior = b;
            menor = a;
        }
    }
    divisivel(maior, menor);
    diferenca(maior, menor);
}

function divisivel(maior, menor) {

    if (maior !== menor) {
        console.log(menor + " não é divisivel por " + maior);

        if (maior % menor === 0) {
            console.log(maior + " é divisivel por " + menor);
        } else {
            console.log(maior + " não é divisivel por " + menor);
        }
    }else{
        if (maior % menor === 0) {
            console.log(maior + " é divisivel por " + menor);
        } else {
            console.log(maior + " não é divisivel por " + menor);
        }
    }
}

function diferenca(maior, menor) {

    let diferenca = maior - menor;
    console.log("A diferença entre eles é: " + diferenca);

}



//Exercícios de Funções

1. 
const arrayDeNumeros = [2, 4, 6, 7, 83, 54, 63, 5, 6, 0];

let primeiroMaior = arrayDeNumeros[0];
let primeiroMenor = arrayDeNumeros[0];
let segundoMaior = arrayDeNumeros[0];
let segundoMenor = arrayDeNumeros[0];


for (let i = 0; i < arrayDeNumeros.length; i++) { 

    if (arrayDeNumeros[i] > primeiroMaior) {
        primeiroMaior = arrayDeNumeros[i];
    }else if (arrayDeNumeros[i]>segundoMaior){
        segundoMaior = arrayDeNumeros[i];
    }

    if (arrayDeNumeros[i] < primeiroMenor) {
        primeiroMenor = arrayDeNumeros[i]
        indexDoPrimeiroMenor = i;
    }else if (arrayDeNumeros[i]<segundoMenor){
        segundoMenor = arrayDeNumeros[i]
    }

}

console.log(arrayDeNumeros);
console.log("primeiro maior " + primeiroMaior);
console.log("segundo maior " + segundoMaior);
console.log("primeiro menor " + primeiroMenor);
console.log("segundo menor "+ segundoMenor);


2.
const funcaoNaoNomeada = function() {alert ("Hello World!")}
console.log(funcaoNaoNomeada);

const invocarFuncaoNaoNomeada = funcaoNaoNomeada();


//Exercícios de Objetos

1. podemos utilizar lista com objetos, quando queremos naquele index da lista guardar um objeto que contém suas 
propriedades - ex. uma lista de filmes, sendo que cada filme tem suas propriedades, como titulo, atores, etc.



2.

class retangulo{
    constructor(aba, beb){
        this.largura = aba;
        this.altura = beb;
        this.perimetro = 2 * (this.largura+this.altura);
        this.area = this.largura*this.altura;
    }
}

function criaRetangulo (lado1,lado2){

    const meuRetangulo = new retangulo (lado1,lado2);

    return meuRetangulo;

}

const testeRetangulo = criaRetangulo(11,12);
console.log(testeRetangulo);



3.

const meuFilmeFavorito = {
    nome: "300",
    ano: "2007",
    diretor: "Zack Snyder",
    atores: "Gerard Butler, Rodrigo Santoro e muito mais"
}

console.log("Venha assistir ao filme " + meuFilmeFavorito.nome + ", de " + meuFilmeFavorito.ano + 
", dirigido por " + meuFilmeFavorito.diretor + " e estrelado por " + meuFilmeFavorito.atores);


4.
const pessoa = { 
    nome: "Alice",
    idade: "8",
    email: "alice@paisdasmaravilhas.com",
    endereço: "um livro ai"
}

function anonimizarPessoa(objeto){
    const anonimo = {...objeto,nome: 'ANONIMO'};
    return anonimo;
}

console.log(pessoa);
console.log(anonimizarPessoa(pessoa));


//Exercícios de Funções de array

1.

const arrayPadrao = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 }
];

//a.
function filtraAdulto(array) {

    const filtrada = array.filter((elemento) => {
        return Number(elemento.idade) >= 20;
    })

    return filtrada
}

//b.
function filtraCrianca(array){

    const filtrada = array.filter((elemento) => {
        return Number(elemento.idade) <= 20;
    })

    return filtrada
}

console.log(filtraCrianca(arrayPadrao));

2.
*/
const array = [1, 2, 3, 4, 5, 6]