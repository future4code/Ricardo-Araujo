

function reverseWord(word:string):string{
    
    let reverse = "";

    for(let i = (word.length-1); i>=0; i--){
        reverse = reverse+word[i];
    };

    return reverse;
};

console.log(reverseWord("Ricardo"));