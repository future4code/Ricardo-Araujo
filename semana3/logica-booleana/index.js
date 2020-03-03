
/*1. Leia o código abaixo. Indique todas as mensagens impressas no console

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado) //false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) //true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado) //false

console.log("e. ", typeof resultado) //boolean 

*/


/*2. Leia o código abaixo

a. O que é `array` e como se declara em `JS`?
array é uma lista que guarda variais de forma ordenada. Para declar uma array em JS usamos a 
seguinte expressão (const nomeArray=[valores])

b. Qual o index inicial de um `array`?
zero

c. Como se determinar o tamanho do `array`?
nomeArray.length

d. Indique todas as mensagens impressas no console.
I.  undefined
II.  null
III.  11
IV.  3  e  4
V.  19  e  9
VI.  3
VII.  1
*/

/*
//a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também. 
//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15

let tF=77;
let fahrenheitToKelvin = ((tF - 32)*(5/9)+273.15);
console.log(fahrenheitToKelvin + "º KELVIN");


//b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32

let tC=80;
const celsiusToFahrenheit = ((tC*(9/5))+32);
console.log(celsiusToFahrenheit + "º FAHRENHEIT");

//c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.

tC=30;
const celsiusToFahrenheit2 = ((tC*(9/5))+32);
const celsiusToKelvin= (tC + 273.15)
console.log(celsiusToFahrenheit2 + "ºF" + " e " + celsiusToKelvin + "ºK");

//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
tC = prompt();
const celsiusToFahrenheit3 = ((tC*(9/5))+32);
const celsiusToKelvin2= (tC + 273.15)
console.log(celsiusToFahrenheit3 + "ºF" + " e " + celsiusToKelvin2 + "ºK");

*/


//2. perguntas para o usuário
pergunta1 = prompt("Oi, quer ser meu amigx ? Eu posso só parecer uma página de computador estranha, mas sou legal");
console.log ("Oi, quer ser meu amigx ? Eu posso só parecer uma página de computador estranha, mas sou legal!")
console.log (pergunta1);

pergunta2 = prompt("Independente do que respondeu, vou considerar que sim :). Qual o seu nome, novo amigx ?");
console.log ("Independente do que respondeu, vou considerar que sim :). Qual o seu nome, novo amigo ?");
console.log ("Belo nome " + pergunta2);

pergunta3 = prompt("Você sabia que não podemos chamar o Javascript de java ?");
console.log ("Você sabia que não podemos chamar o Javascript de java ?");
console.log (pergunta3);

pergunta4 = prompt("Eu não consegui entender muito bem o que você falou, pois hoje é meu primeiro dia de vida e ainda não tenho muita consciência. Mas quero te perguntar se você conhece o meu criador ?");
console.log ("Eu não consegui entender muito bem o que você falou, pois hoje é meu primeiro dia de vida e ainda não tenho muita consciência. Mas quero te perguntar se você conhece o meu criador ?");
console.log (pergunta4);

pergunta5 = prompt("Novamente não consegui entender o que respondeu, mas não tem problema eu te conto. Fui criado por um aluno do curso FullStack da Future4, e em algumas semanas ele estará fazendo programas ainda mais incríveis, talvez até eu tenha um update. Um abraço e o meu até logo " +pergunta2);
console.log ("Novamente não consegui entender o que respondeu, mas não tem problema eu te conto. Fui criado por um aluno do curso FullStack da Future4, e em algumas semanas ele estará fazendo programas ainda mais incríveis, talvez até eu tenha um update. Um abraço e o meu até logo " + pergunta2);
console.log (pergunta5);



/*
//3. conta de consumo de energia.
consumo = Number (prompt("digite o valor consumido em kwh"));

let valor = consumo * 0.05;
console.log("Valor a pagar R$" + valor);

let valorDesconto = valor - (valor *0.15);
console.log("Valor a pagar com desconto R$" + valorDesconto);
*/



/*
//DESAFIO

//libra = Number (prompt("digite o valor em libra que será convertido para kg"));
libra = 20;
const libraToKg = libra / 2.205;
console.log(libra+ "lb equivale a " + libraToKg + "kg");


//onca = Number (prompt("digite o valor em onças que será convertido para kg"));
onca = 10.5;
const oncaToKg = onca / 35.274;
console.log(onca+ "oz equivale a " + oncaToKg + "kg");

//milha = Number (prompt("digite o valor em milhas que será convertido para metros"));
milha = 100;
const milhasToMetros = milha * 1609.34;
console.log(milha+ "mi equivale a " + milhasToMetros + "m");


//pes = Number (prompt("digite o valor em pés que será convertido para metros"));
pes = 100;
const pesToMetro = pes / 3.281;
console.log(pes+ "ft equivale a " + pesToMetro + "m");

//galaos = Number (prompt("digite o valor em galões que será convertido para litros"));
galoes = 103.56;
const galoesToLitros = galoes * 3.78541;
console.log(galoes+ "gal equivale a " + galoesToLitros + "l");

//xicaras = Number (prompt("digite o valor em xicaras que será convertido para litros"));
xicaras = 450;
const xicarasToLitros = xicaras / 3.52;
console.log(xicaras+ "xic equivale a " + xicarasToLitros + "l");

*/









