## exercicio 01

b. error400 . message: "missing input";

## exercicio 02

## exercicios console AWS
export.handle = async() =>{
    return "Olá mundo, sou uma mensagem da AWS
};

// exercicio02
// exports.handler = async(event)=>{
//     return "Olá mundo, sou uma mensagem da AWS";
// };

// exercicio03
// exports.handler = async(event)=>{
//     const sum = (event.number1) + (event.number2);

//     return sum;
// };

// exercicio04
// exports.handler = async(event)=>{
    
//     const itsEmail = (event.email.includes("@"));
//     const checkDot = (event.email.includes(".com"));
    
//     if(!itsEmail && !checkDot){
//         const result = {
//             "isMail": false,
//             "reason": "não tem @ e .com"
//         };
//         return result;
//     };
    
    
//     if(!itsEmail){
//         const result = {
//             "isMail": false,
//             "reason": "não tem @"
//         };
//         return result;
//     };
    
//     if(!checkDot){
//         const result = {
//              "isMail": false,
//             "reason": "não tem .com"
//         };
//         return result;
//     };
    
//     const result = {
//         "isMail": true,
//     };
    
//     return result;
// };