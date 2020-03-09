/*
exercício 1


const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}

let lista = minhaFuncao(4);

console.log(lista);


//a função retorna valores para uma array, seguindo a regra de duas condicionais.

a. minhaFuncao(2) - array[];
b. minhaFuncao(5) - array[0,1,0,1,2,3];
c. minhaFuncao(8) - array[0,1,0,1,2,3,0,1,2,3,4,5];

*/

/*
exercício 2

let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paulinha"));

a. indicamos para a função, qual a lista e qual o elemento ele deve procurar e ele retorna o
 index daquele emento.

b. sim, pois ele olha o elemento da array, e para funções podemos utilizar números como argumentos.

*/

/*
exercício 3

a função soma todos os indices da array e multiplica todos os indices da array, e 
retorna uma array contendo estes resultados. Um nome melhor para esta função seria digitoVerificador.

*/

/*
exercicio 4
a.

function idadeCachorro (idadeHumano){
    let resultado = idadeHumano*7;
    return resultado;
}

console.log(idadeCachorro(4));

b.

function dadosEstudante(nome,idade,endereco,estudante){

    let status;

    if(estudante===true){
        status="sou estudante"
    } else if (estudante===false){
        status="não sou estudante"
    }

    let resultado = nome + " , " + idade + " anos , moro em " + endereco + " " + status

    return resultado;
}


console.log(dadosEstudante("Ricardo",27,"SP",true));

*/

/* exercício 5

function anoSeculo(ano){

    let seculo;

    if (ano>=901 && ano<=1000){
        seculo="X";
    }
    else if (ano>=1001 && ano<=1100){
        seculo="XI";
    }else if (ano>=1101 && ano<=1200){
        seculo="XII";
    }else if (ano>=1201 && ano<=1300){
        seculo="XIII";
    }else if (ano>=1301 && ano<=1400){
        seculo="XIV";
    }else if (ano>=1401 && ano<=1500){
        seculo="XV";
    }else if (ano>=1501 && ano<=1600){
        seculo="XVI";
    }else if (ano>=1601 && ano<=1700){
        seculo="XVII";
    }else if (ano>=1701 && ano<=1800){
        seculo="XVIII";
    }else if (ano>=1801 && ano<=1900){
        seculo="XIX";
    }else if (ano>=1901 && ano<=2000){
        seculo="XX";
    }else if (ano>=2001 && ano<=2100){
        seculo="XXI";
    }else{
        seculo="não definido"
    }

    let resultado = ("O ano " + ano + " pertence ao seculo " + seculo);

    return resultado;

}

let testeFuncao = anoSeculo(2000);

console.log(testeFuncao);

*/

/* exercício 6
a.
const listaPadrao=[10,23,45,78,90,52,35,67,84,22];

function tamanhoArray(lista){
    return lista.length;
}

console.log(tamanhoArray(listaPadrao));

b.

function paridade(numero){
    let resultado;

    if(numero%2===0){
        resultado= "é par"
    }else{
        resultado= "é ímpar"
    }

    return resultado;
}

console.log(paridade(3));

c.

const listaPadrao=[10,23,45,78,90,52,35,67,84,22];

function arrayPares(lista){

    let resultado=0;

    for(let elemento of lista){
        if(elemento%2===0){
            resultado=resultado+1;
        }
    }

    return resultado;

}

console.log(arrayPares(listaPadrao));

d.

function paridade(numero){
    let resultado;

    if(numero%2===0){
        resultado= true;
    }else{
        resultado= false
    }
    return resultado;
}


function arrayPares(lista){

    let resultado=0;

    for(let elemento of lista){

        let valor = paridade(elemento);

        if(valor===true){
            resultado=resultado+1;
        }
    }
    return resultado;
}


const listaPadrao=[10,23,45,78,90,52,35,67,84,22];

console.log(arrayPares(listaPadrao));
*/