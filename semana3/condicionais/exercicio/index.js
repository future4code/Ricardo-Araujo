/*

1. O algoritmo testa se o número é par ou impar, retornando "Passou no teste"caso o número seja par".

2.

a. retornar o valor de uma fruta com base no seu nome.
b. O preço da fruta Maçã é R$ 2.25
c. R$24.55
d. O preço da fruta  Pêra  é  R$  5

3. o retorno esperado seria "Número 1 é menor ou igual ao 2!", porém a variável mensagem só 
existe no bloco if, logo console.log que esta no escopo geral não consegue acessar esta variável.

*/

/*

//4. a.

const numero1 = Number(prompt("Digite o primeiro número"));
const numero2 = Number(prompt("Digite o segundo número"));    


if (numero1 === numero2){
    console.log("Você digitou números iguais");
} else if (numero1 > numero2){
    console.log(numero1 , numero2);
}else {
    console.log(numero2 , numero1);
}

*/

/*

//b.

const numero1 = Number(prompt("Digite o primeiro número"));
const numero2 = Number(prompt("Digite o segundo número"));    
const numero3 = Number(prompt("Digite o segundo número")); 

if (numero1 === numero2 && numero2 === numero3){
    console.log("Você digitou números iguais");
    
}else if (numero1>=numero2 && numero1>=numero3){
    if(numero2>numero3){
        console.log(numero1,numero2,numero3);
    } else{
    console.log (numero1,numero3,numero2);
    }
}

else if (numero2>=numero1 && numero2>=numero3){
    if(numero1>numero3){
        console.log(numero2,numero1,numero3);
    } else{
    console.log (numero2,numero3,numero1);
    }
}

else if (numero3>=numero1 && numero3>=numero2){
    if(numero1>numero2){
        console.log(numero3,numero1,numero2);
    } else{
    console.log (numero3,numero2,numero1);
    }
}

else {
    console.log ("pelo menos 1 dos valores digitados não é um número");
}

*/


/*
//c.

const numero1 = Number(prompt("Digite o primeiro número"));
const numero2 = Number(prompt("Digite o segundo número"));    
const numero3 = Number(prompt("Digite o segundo número")); 

if (numero1 === numero2 && numero2 === numero3){
    console.log("Você digitou números iguais, por favor digite pelo menos um numero diferente!");
    
}else if (numero1>=numero2 && numero1>=numero3){
    if(numero2>numero3){
        console.log(numero1,numero2,numero3);
    } else{
    console.log (numero1,numero3,numero2);
    }
}

else if (numero2>=numero1 && numero2>=numero3){
    if(numero1>numero3){
        console.log(numero2,numero1,numero3);
    } else{
    console.log (numero2,numero3,numero1);
    }
}

else if (numero3>=numero1 && numero3>=numero2){
    if(numero1>numero2){
        console.log(numero3,numero1,numero2);
    } else{
    console.log (numero3,numero2,numero1);
    }
}

else {
    console.log ("pelo menos 1 dos valores digitados não é um número");
}

*/

//5.

let vertebras = prompt("tem vertebras ? (s/n)");
let mamifero;
let racional;
let penas;
let terrestre;
let agua;

if (vertebras === "s"){

    mamifero = prompt("é mamifero? (s/n)");

//é mamifero
    if (mamifero ==="s"){
        racional = prompt("é racional ? (s/n)");
        if(racional === "s"){
            console.log("é um humano");
        }
        else {
            console.log("é um mamifero não racional");
        }
    }

//não mamifero
    else {
        penas = prompt("tem penas ? (s/n)") 
        if(penas === "s"){
            console.log("é uma ave");
        }

//não é uma ave
        else {
        terrestre = prompt("é terrestre ? (s/n)");
            
        if(terrestre==="s"){

//é terrestre
        agua = prompt("passa parte da vida na água ? (s/n)");
        if(agua==="s"){
            console.log("é um anfibio");
        }
    
        else{
            console.log("é um reptil");
        }
    }

//não é terrestre
    else{
        console.log("é um peixe");
        }
    }

}

}
else{
    console.log("invertebrado")
}


