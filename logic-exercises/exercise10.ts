
function convertDNAToRNA(dna:string):string{
    
    let rna:string = "";

    for(let i=0; i<dna.length; i++){

        switch(dna[i]){
            case "A":{
                rna = rna + "U";
                break;
            };
            case "T":{
                rna = rna + "A";
                break;
            };
            case "C":{
                rna = rna + "G";
                break;
            };
            case "G":{
                rna = rna + "C";
                break;
            };
            default:{
                return "DNA incorreto"
            };
        };
    };

    return rna;
};

const dna = "ATTGCTGCGCATTAACGACGCGTA";

console.log(convertDNAToRNA(dna));