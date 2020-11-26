/*
Considere que a gente só possa fazer três operações com string: adicionar um caractere a ele, 
remover um caractere dele ou substituir um caractere por outro. Dizemos que uma string 
é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. 
Escreva um método que determine se uma string é  'one edit' de outra.
*/

class OneEdit{
    private equal(original:string, edited:string):boolean{
        if(original === edited){
            return true;
        }else{
            return false;
        };
    };

    private compareSameSize(original:string, edited:string):boolean{

        let differences = 0;

        for(let i=0; i<original.length; i++){

            if(original[i] !== edited[i]){
                differences+=1;

                if(differences > 1){
                    return false;
                };
            };
        };
        return true;
    };

    private compareDiffSize(smaller:string, bigger:string):boolean{

        let differences = 0;
        let i=0;
        let j=0;

        while(smaller[i]!==undefined && bigger[j]!==undefined){

            if(smaller[i] !== bigger[j]){
                differences++;
                i--;

                if(differences>1){
                    return false;
                };
            };

            i++;
            j++;
        };
        return true;
    };


    public check(original:string, edited:string){

        const equal = this.equal(original, edited);
        if(equal){
            return true;
        };

        const diff = original.length - edited.length;
        if(diff >= 2 || diff <=-2){
            return false;
        };

        switch(diff){
            case 0:{
                return this.compareSameSize(original, edited);
            };
            case 1:{
                return this.compareDiffSize(edited, original);
            };
            case -1:{
                return this.compareDiffSize(original, edited);
            };
        };
    };

};

const banana = new OneEdit().check("banana", "banan");

console.log(banana);