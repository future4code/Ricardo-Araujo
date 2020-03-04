
const nome = prompt("digite o seu nome completo");
const tipoJogo = (prompt ("Tipo de jogo: IN indica internacional; e DO indica doméstico (IN/DO)"));
const etapaJogo = prompt ("Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final (SF/DT/FI)");
const categoria = prompt ("opções disponíveis  1, 2, 3 ou 4");
const quantidade = Number (prompt ("quantidade de ingressos desejados"));

let valorIngresso;
let moeda;
let valorTotal;


if (etapaJogo==="SF"){
    switch (categoria){
        case "1":
            valorIngresso=1320;
            break;

        case "2":
            valorIngresso=880;
            break;

        case "3":
            valorIngresso=550;
            break;

        case "4":
            valorIngresso=220;
            break;
    }
}

if (etapaJogo==="DT"){
    switch (categoria){
        case "1":
            valorIngresso=660;
            break;

        case "2":
            valorIngresso=440;
            break;

        case "3":
            valorIngresso=330;
            break;

        case "4":
            valorIngresso=170;
            break;
    }
}

if (etapaJogo==="FI"){
    switch (categoria){
        case "1":
            valorIngresso=1980;
            break;

        case "2":
            valorIngresso=1320;
            break;

        case "3":
            valorIngresso=880;
            break;

        case "4":
            valorIngresso=330;
            break;
    }
}

switch (tipoJogo){
    case "IN":
        moeda=4.1;
        break;

    case "DO":
        moeda=1;
        break;
}

valorTotal = valorIngresso * quantidade * moeda;
console.log ("---Dados da compra---");
console.log ("Nome do cliente: " + nome);
console.log ("Etapa do jogo: " + etapaJogo);
console.log ("Categoria: " + categoria);
console.log ("Quantidade de ingressos: " + quantidade + " ingressos");
console.log ("---Valores---")

if (tipoJogo==="IN"){
    console.log("Valor do ingresso: R$" + valorIngresso);
    console.log("Valor total: R$" + valorTotal);
}
else {
    console.log("Valor do ingresso: U$" + valorIngresso);
    console.log("Valor total: U$" + valorTotal);
}
