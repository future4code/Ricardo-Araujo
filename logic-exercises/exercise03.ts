
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