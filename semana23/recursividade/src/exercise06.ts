export function firstUpperCase(input:string, i:number=0, result:string = "No Upper case"){
    
    if(input[i]===undefined){
        return result;
    };
    
    const charCode = input.charCodeAt(i);
    if(charCode>=65 && charCode<=90){
        return input[i];
    };

    return firstUpperCase(input, i+1);
};