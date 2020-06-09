import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack! - Desafio");

 if(confirm("Quer iniciar uma nova rodada ?")) {

   let usuario=0;
   let MaoUsuario="";
   let computador=0;
   let MaoComputador="";
   let carta;
   let arrayUsuario=[];
   let arrauComputador=[];

   carta = comprarCarta();
   MaoUsuario = carta.texto;
   usuario =carta.valor;  

   carta = comprarCarta();
   MaoComputador = carta.texto;
   computador =carta.valor;


   while (MaoUsuario==="A" && MaoComputador==="A"){


   carta = comprarCarta();
   MaoUsuario = carta.texto;
   usuario =carta.valor;  

   carta = comprarCarta();
   MaoComputador = carta.texto;
   computador =carta.valor;     


   console.log("Os dois jogadores, compraram A, como a primeira carta.");
   }
   




   carta = comprarCarta();

   MaoUsuario = MaoUsuario + " " + carta.texto;
   usuario +=carta.valor;


   carta = comprarCarta();

   MaoComputador = MaoComputador + " " + carta.texto;
   computador +=carta.valor;


//inserir confirm e mostrar a mão

// anterar a inserçao de valores para array










   
   console.log("Usuário - cartas: " + MaoUsuario + " - pontuação " + usuario);
   console.log("Computador - cartas: " + MaoComputador + " - pontuação " + computador);

   if (usuario>computador){
      console.log("O usuário ganhou !");
   }else if (usuario<computador){
      console.log("O computador ganhou !");
   }else if (usuario===computador){
      console.log("Empate !");
   }else {
      console.log("Ocorreu algum erro");
   }

} else {
   console.log("o jogo acabou");
}