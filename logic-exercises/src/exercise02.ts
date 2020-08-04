/*
Resolva os exercícios em arquivos typescript. Testes são bem-vindos.

a. Faça uma função que receba uma string e devolva um objeto com as informações: quantos caracteres a string possui, 
qual seu primeiro caracter e qual seu último caracter

b. Faça uma função que receba uma string e devolva um array com seus caracteres. Se o input for `escola`, a saída deve ser `[e, s, c, o, l, a]`

*/


class calcString{

    private value: string;

    constructor(value:string){
        this.value = value
    };

    public calcA(){
        const size:number = this.value.length;
        const lastChar:string = this.value[size-1];

        const result = {
            numberLetter: size,
            lastChar
        };

        return result;
    };

    public stringToArray(){

        let aux: string[] = [];

        for(let i=0; i< this.value.length; i++){
            aux.push(this.value[i]);
        };

        return aux;
    };

};


const test2 = new calcString("escola");

console.log(test2.calcA());
console.log(test2.stringToArray());

// obs. solução com complexidade O(n)