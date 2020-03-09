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
   let MaoUsuario=[];
   let computador=0;
   let MaoComputador=[];
   let carta;
   let vinteUm=true;

   carta = comprarCarta();
   MaoUsuario.push(carta.texto);
   usuario = carta.valor;  

   carta = comprarCarta();
   MaoComputador.push(carta.texto);
   computador = carta.valor;


console.log(MaoUsuario , "teste", MaoComputador);


   while ( (MaoUsuario[0]==="A♦️" || MaoUsuario[0]==="A♥️" || MaoUsuario[0]==="A♣️" || MaoUsuario[0]==="A♠️")
      &&
   (MaoComputador[0]==="A♦️" || MaoComputador[0]==="A♥️" || MaoComputador[0]==="A♣️" || MaoComputador[0]==="A♠️") ){
   

   console.log("entrei no while");

   MaoUsuario=[];
   carta = comprarCarta();
   MaoUsuario.push(carta.texto);
   usuario = carta.valor;  

   MaoComputador=[];
   carta = comprarCarta();
   MaoComputador.push(carta.texto);
   computador = carta.valor;     


   console.log("Os dois jogadores, compraram A, como a primeira carta.");
   }


   carta = comprarCarta();
   MaoUsuario.push(carta.texto);
   usuario +=carta.valor;

   carta = comprarCarta();
   MaoComputador.push(carta.texto);
   computador += carta.valor;


   while(vinteUm) {

      if (confirm("Suas cartas são " + MaoUsuario + ". A carta revelada do computador é " + MaoComputador[0])){

         carta = comprarCarta();
         MaoUsuario.push(carta.texto);
         usuario +=carta.valor;

      }
      else{
         vinteUm=false;
      }

      if (usuario>21){
      vinteUm=false;
      }

   }


   while(computador<=usuario && computador<21){
      carta = comprarCarta();
      MaoComputador.push(carta.texto);
      computador += carta.valor;
   }


   alert("Usuário - cartas: " + MaoUsuario + " - pontuação " + usuario + "\n" 
   + "Computador - cartas: " + MaoComputador + " - pontuação " + computador);


   if (usuario>21){
      alert("O computador ganhou !");
   }
   else if (computador>21){
      alert("O usuário ganhou !");
   }
   else if (usuario>computador){
      alert("O usuário ganhou !");
   }else if (usuario<computador){
      alert("O computador ganhou !");
   }else if (usuario===computador){
      alert("Empate !");
   }else {
      alert("Ocorreu algum erro");
   }

} else {
   console.log("o jogo acabou");
   alert("O jogo acabou !");
 }