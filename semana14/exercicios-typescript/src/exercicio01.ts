type result={
    sum : number,
    sub : number,
    mult: number,
    bigger: number
}

function calcNumbers(num1: number, num2: number):result{

    const result={
        sum: (num1+num2),
        sub: (num1-num2),
        mult: (num1*num2),
        bigger: 0
    };

    if(num1>num2){
        result.bigger = num1;
    }else{
        result.bigger = num2
    }

    return result;
};

console.log(calcNumbers(5,3));