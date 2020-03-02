
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

