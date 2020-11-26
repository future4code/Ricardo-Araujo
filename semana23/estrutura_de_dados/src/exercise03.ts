/*
Faça a implementação de uma Fila em *Typescript* e utilizando um Array 
como estrutura de base (em aula, usamos uma Lista Ligada). Implemente os métodos:

`isEmpty`: que indica se ela está vazia

`enqueue`: que adiciona um elemento à fila

`dequeue`: que retira um elemento da fila

`print`: que imprima todos os elementos da fila
*/


export class Queue{
    private start: QueueNode = undefined;

    public enqueue(process:number):void{
        if(this.start === undefined){
            this.start = {process};
            return;
        }else{
            let queueProcess:QueueNode = this.start;

            while(queueProcess.next !== undefined){
                queueProcess = queueProcess.next
            };

            queueProcess.next = {process};
        };
    };

    public isEmpty():boolean{
        if(this.start === undefined){
            return true;
        }else{
            return false;
        };
    };

    public deQueue():void{
        this.start = this.start.next;
    };

    public print():void{
        let process = this.start;

        while(process !== undefined){
            console.log(process.process);

            process = process.next
        };
    };

};

interface QueueNode{
    process: number,
    next?: QueueNode
};