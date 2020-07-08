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


const test = new calcString("escola");

console.log(test.calcA());
console.log(test.stringToArray());

// obs. solução com complexidade O(n)