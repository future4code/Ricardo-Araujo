import {LinkedList, LinkedNode} from "./exercise01";
import { Stack } from "./exercise02";

function main():void{
    // const listaBonita = new LinkedList(4);

    // listaBonita.addToTail(5);
    // listaBonita.addToTail(6);

    // const teste = listaBonita.search(5);
    // listaBonita.delete(teste as LinkedNode);

    // listaBonita.printList();
    
    const myStack = new Stack

    myStack.push(5);
    myStack.push(4);
    myStack.push(3);
    myStack.push(1);
    myStack.pop();
    myStack.pop();
    myStack.pop();
    // myStack.pop();

    myStack.print()

    console.log(myStack.isEmpty())
};

main();