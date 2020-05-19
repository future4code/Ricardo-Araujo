const operation: string = process.argv[2];
const firstNumber: number = Number(process.argv[3]);
const secondNumber: number = Number(process.argv[4]);

if(operation && firstNumber && secondNumber){
        
    switch(operation.toLowerCase()){
        case "add":{
            const total: number = (firstNumber + secondNumber);
            console.log("\x1b[34m", `Resposta: ${total}`);
            break;
        };
        case "sub":{
            const total: number = (firstNumber - secondNumber);
            console.log("\x1b[34m", `Resposta: ${total}`);
            break;
        };
        case "mult":{
            const total: number = (firstNumber * secondNumber);
            console.log("\x1b[34m", `Resposta: ${total}`);
            break;
        };
        case "div":{
            const total: number = (firstNumber / secondNumber);
            console.log("\x1b[34m", `Resposta: ${total}`);
            break;
        };
        default:{
            console.log("\x1b[31m", "Não encontramos a operação selecionada");
            break;
        }
    };

}else{
    console.log("\x1b[31m", "Erro, esta operação requer operacao num1 num2");
}
