export function biggerValue(input:number[], bigger:number = input[0], i:number=0){
    if(i===input.length){
        return bigger;
    };

    if(input[i]>bigger){
        bigger = input[i];
    };

    return biggerValue(input, bigger, i+1);
};