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

const comprarCartasValidas = () => {

   saoValidas = false

   while (!saoValidas) {

      carta1 = comprarCarta()
      carta2 = comprarCarta()

      if ((carta1.texto !== "A") || (carta2.texto !== "A")) {
         saoValidas = true
      } 

   }

   return [carta1, carta2]

}

const formataListaCartas = (cartas) => {
   let cartasString = ''
   
   for (carta of cartas) {
      cartasString += carta.texto
      cartasString += ' '
   }

   return cartasString
}

const jogo = () => {

   let cartasComputador = comprarCartasValidas()
   let pontosComputador = cartasComputador[0].valor + cartasComputador[1].valor
   
   let cartasJogador = comprarCartasValidas()
   let pontosJogador = cartasJogador[0].valor + cartasJogador[1].valor

   let jogando = true

   while (jogando) {

      comprarMaisCartas = confirm(
         `Suas cartas são ${formataListaCartas(cartasJogador)}. A carta revelada do computador é ${cartasComputador[0].texto}` +
         `\n` +
         `Deseja comprar mais uma carta?`
      )
      
      if (comprarMaisCartas) {
         novaCarta = comprarCarta()
         
         cartasJogador.push(novaCarta)

         pontosJogador += novaCarta.valor
      }

      else {
         jogando = false
      }

      if (pontosJogador >= 21) {
         jogando = false
      }

   }

   if (pontosJogador > pontosComputador) {
      alert('Você venceu!')
   }
   else if (pontosJogador < pontosComputador) {
      alert('Você perdeu para o computador!')
   }
   else {
      alert('Empate!')
   }
}

const iniciarJogo = () => {
   const iniciarJogo = confirm("Quer iniciar uma nova rodada?")

   if (iniciarJogo) {
      jogo()
   }

   else {
      console.log('Fim de jogo!')
   }
}

iniciarJogo()