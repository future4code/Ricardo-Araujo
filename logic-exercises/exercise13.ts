import readline from "readline";

function sum(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => rl.question("", (ans:string)=>{
        rl.close();
        resolve(ans);
    }));
};

async function main(){

    let total:number = 0;
    let input:number = Infinity;

    console.log("Insira os numeros que deseja somar. Ao digitar '0', a soma será calculada");

    while(input!==0){
        const newInput = await sum();
        input = Number(newInput);
        total = total + input;
    };

    console.log("\ntotal: " + total);
};

main();