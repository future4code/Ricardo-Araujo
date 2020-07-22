
function completeArray(inputArray:number[]){

    let minor = inputArray[0];
    let bigger = inputArray[0];

    for(let i = 0; i<inputArray.length; i++){

        if(inputArray[i]>bigger){
            bigger = inputArray[i];
        }else if(inputArray[i]<minor){
            minor = inputArray[i];
        };
    };

    const result:number[] = [];

    for(let i = minor; i<=bigger; i++){
        result.push(i);
    };
    
    return result;
};

const bla:number[] = [4,8];

console.log(completeArray(bla));