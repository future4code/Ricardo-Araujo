
function factorial(value:number){
    
    if(value<0){
        return "invalid value";
    };
    
    let fact = 1;

    for(let i = 0 ; value>0; value--){
        fact = fact*value;
    };

    return fact;
};

console.log(factorial(-64));