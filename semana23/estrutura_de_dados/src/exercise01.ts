/*
Faça a implementação de uma Lista Ligada em *Typescript*. 
Implemente o método que adiciona um elemento ao final da lista e um método que imprima todos elementos presentes nela.
*/

export class LinkedList{
    private start:LinkedNode = {
        value: undefined,
        next: undefined
    };

    constructor(value:number){
        this.start.value = value;
    };

    public addToTail(value:number):void{
        let node:any = this.start;

        while(node.next !== undefined){
            node = node.next;
        };
        node.next = {value};
    };

    public delete(input:LinkedNode):void{

        if(input === this.start){
            this.start = this.start.next;
            return;
        };

        let node = this.start;
        while(node !== undefined){
 
            if(node.next === input){
                const nodeToBeDeleted = node.next;
                const newNext = nodeToBeDeleted.next
                node.next = newNext;
                return;
            };

            node = node.next;
        };

    };

    public printList():void{
        let node = this.start;

        while(node !== undefined){
            console.log(node.value);

            node = node.next;
        };
    };

    public search(value:number):LinkedNode|string{
        let node = this.start;

        while(node !== undefined){

            if(node.value === value){
                return node;
            };

            node = node.next;
        };

        return "Não contém"
    };
};

export interface LinkedNode{
    value: number,
    next?: LinkedNode
};