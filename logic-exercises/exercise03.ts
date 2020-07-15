

function checkItsANumber(value:string){

    const numValue:number = Number(value);

    if(isNaN(numValue)){
        return false;
    }else{
        return true;
    };
};

const teste = checkItsANumber("a");

console.log(teste);


function checkItsEqual(a:string, b:string){
    if(a === b){
        return true;
    }else{
        return false;
    };
};

function hardCheckItsEqual(a:string, b:string){
    const aPos = a.toLowerCase();
    const bPos = b.toLowerCase();

    if(aPos === bPos){
        return true;
    }else{
        return false
    };
};

console.log(checkItsEqual("escola", "escola"));
console.log(hardCheckItsEqual("escola", "escola"));
