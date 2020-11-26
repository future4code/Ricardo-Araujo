/*
Faça a implementação de uma Pilha em *Typescript* e utilizando uma Lista 
Ligada como estrutura de base (em aula, usamos um Array). Implemente os métodos:

`isEmpty`: que indica se ela está vazia

`push`: que adiciona um elemento à pilha

`pop`: que retira um elemento da pilha

`print`: que imprima todos os elementos da pilha
*/

export class Stack{
    private end: stackNode = undefined;

    public push(process: number):void{
        this.end = {
            process: process,
            previous: this.end
        };
    };

    public pop():void{
        this.end = this.end.previous
    };

    public print():void{
        let process = this.end;

        while(process !== undefined){
            console.log(process.process);
            process = process.previous
        };
    };

    public isEmpty():boolean{
        if(this.end === undefined){
            return true;
        }else{
            return false;
        };
    };

};

interface stackNode{
    process: number,
    previous: stackNode
};