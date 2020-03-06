//interpretação de código

/*
1.
let sum = 0
    for(let i = 0; i < 15; i++) {
      sum += i
    }
    console.log(sum)

em cada interação do loop é somado i a varíavel sum, sendo que em cada interação a 
varíavel i é incrementada em +1. O valor mostrado é 105.

*/

/*
2. a. O que o comando .push faz?
// adiciona o elemento no fim da array

b. [10, 15, 25, 30] // nova lista contendo valores multiplos de 5.


c. numero=3:  [12, 15, 18, 21, 27, 30] / numero=4: [12]


const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista){
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)

*/

/*

//3. a.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

let maior=0;
let menor=1000000000; //eu poderia também fazer um novo laço apenas para o menor, atribuido 
//o valor inicial de menor=maior, assim eu garanto que independente da array, o algoritmo sempre vai funcionar.

for(let elemento of arrayOriginal){

    if (elemento>maior){
        maior=elemento;
    }
    if (elemento<menor){
        menor=elemento;
    }

}

console.log("O maior valor é " + maior + " e o menor valor é " + menor);

//b.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let novoArray = [];

for(let elemento of arrayOriginal){
    
    let valor = elemento / 10;
    novoArray.push(valor);

}

console.log(novoArray);


//c.

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let arrayPares = [];

for (let elemento of arrayOriginal){

    if (elemento%2===0){
        arrayPares.push(elemento);
    }

}

console.log (arrayPares);

//d.

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

for(let i=0; i<arrayOriginal.length;i++){

    console.log("O elemento do índex " + i + " é " + arrayOriginal[i] );
}

*/

