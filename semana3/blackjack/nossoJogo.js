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

 console.log("Bem vindo ao jogo de Blackjack!");

 if(confirm("Quer iniciar uma nova rodada ?")) {

   let usuario=0;
   let MaoUsuario="";
   let computador=0;
   let MaoComputador="";

   for (let i=0;i<2;i++){

      const carta = comprarCarta();

      MaoUsuario = MaoUsuario + " " + carta.texto;
      usuario +=carta.valor;

   }

   for (let i=0;i<2;i++){

      const carta = comprarCarta();

      MaoComputador = MaoComputador + " " + carta.texto;
      computador +=carta.valor;

   }
   
   console.log("Usuário - cartas: " + MaoUsuario + " - pontuação " + usuario);
   console.log("Usuário - cartas: " + MaoComputador + " - pontuação " + computador);

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


