import readline from "readline";

function askQuestion(query:string) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, (ans:any) => {
        rl.close();
        resolve(ans);
    }))
}

async function main(){
    const name = await askQuestion("Qual seu nome ?\n");
    const age = await askQuestion("Qual a sua idade?\n");
    console.log("\nSuas informações são:");
    console.log("name: " + name + "   idade: " + age );
};

main();
