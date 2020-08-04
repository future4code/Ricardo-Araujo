

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