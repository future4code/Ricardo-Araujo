
function extendsArray(initialArray: number[], increment: number):number[]{

    const sortedArray = initialArray.sort((a,b)=> a-b);
    let result:number[] = sortedArray;

    if(increment<sortedArray[0]){
        const newArray = [];

        while(increment<sortedArray[0]){
            newArray.push(increment);
            increment++
        };
        
        result = newArray.concat(sortedArray);
        
    }else if(sortedArray[sortedArray.length-1]<increment){

        while(sortedArray[sortedArray.length-1]<increment){

            result.push(sortedArray[sortedArray.length-1]+1);
        };
        

    };

    return result;
};

const test8 = [4,6,3,5];

console.log(extendsArray(test8, 19));