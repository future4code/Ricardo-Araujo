export function numberSize(input:number,acc:number = 1){

    if(input.toString().length>acc){
        return numberSize(input, acc+1);
    };
    
    return acc;
};