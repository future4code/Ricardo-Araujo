import { LinkedList, LinkedNode } from "../src/exercise01";


describe("exercise01", ()=>{
    test("Create List", ()=>{

        const testList = new LinkedList(1);
        testList.addToTail(2);
        testList.addToTail(3);
        testList.addToTail(4);
        testList.addToTail(5);

        const result = {
            start: {
                value: 1,
                next:{
                    value:2,
                    next:{
                        value:3,
                        next:{
                            value:4,
                            next:{
                                value:5,
                                next: undefined
                            }
                        }
                    }
                }
             }
        };

        expect(testList).toEqual(result);
    });

    test("Print list", ()=>{  
        const testList = new LinkedList(1);
        testList.addToTail(2);
        testList.addToTail(3);
        testList.addToTail(4);
        testList.addToTail(5);
        
        console.log = jest.fn();
        testList.printList();

        expect(console.log).toBeCalledTimes(5);
    });

    test("Delete item", ()=>{
        const testList = new LinkedList(1);
        testList.addToTail(2);
        testList.addToTail(3);
        testList.addToTail(4);
        testList.addToTail(5);

        const itemToDelete = testList.search(3);
        testList.delete(itemToDelete as LinkedNode);

        const result = {
            start: {
                value: 1,
                next:{
                    value:2,
                    next:{
                        value:4,
                        next:{
                            value:5,
                            next:undefined
                        }
                    }
                }
             }
        };

        expect(testList).toEqual(result);
    });
});