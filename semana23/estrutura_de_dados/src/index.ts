import {LinkedList, LinkedNode} from "./exercise01";

function main():void{
    const listaBonita = new LinkedList(4);

    listaBonita.addToTail(5);
    listaBonita.addToTail(6);

    const teste = listaBonita.search(5);
    listaBonita.delete(teste as LinkedNode);

    listaBonita.printList();
    
};

main();