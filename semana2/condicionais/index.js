// Exercícios de interpretação de código

/*
--------> 1°

a. Para saber se o numero é par ou impar, pois o resto da divisão sendo 0 é de um numero par, se for
ele passou no teste, se não ele não passou.

b. Para numeros divisiveis por 2.

c.Para numeros impares, que são divisiveis só por ele mesmo.

-------> 2°

a. Para mostrar o valor da fruta que o usuario escolher.

b. (pegadinha hein kakakakka,)
Se a palavra for escrita apenas maça, ou maçã vai da valor 5, se for escrita corretamente vai sair valor certo.

c. Vai retornar valor 5.

------> 3°

a. Condição do numero que o usario digitar for maior que 0.

b. Se for 10 passa no teste. Se for -10 da erro pois o else não foi escrito no codigo.

c. Erro do -10 pois não foi declarado. E Mensagem só vai paracer se o console estivesse dentro do
escopo filho, pois o escopo global não acessa.

*/

// Exercícios de escrita de código

//-------> 1°

// const idadeUsuario = Number(prompt("Qual sua idade?"));

// const coparando = () => {
//     if(idadeUsuario >= 18) {
//         console.log("Você pode dirigir!")
//     } else {
//         console.log("Você não pode!")
//     }
// }

// coparando()

//------> 2°

// const turnoQueEstuda = prompt("Qual turno você estuda? Digite M para matutino, V para vespertino e N para norturno.").toLocaleLowerCase()

// const mensagem = () => {
//     if (turnoQueEstuda == "m") {
//         console.log("Bom dia!")

//     } else if (turnoQueEstuda == "v") {
//         console.log("Boa tarde!")
        
//     } else if (turnoQueEstuda == "n") {
//         console.log("Boa noite!")
//     } else
//         console.log("Recarregue a pagina e tente novamente")
// }

// mensagem()

// -------> 3°

// const turno = () => {
//     const turnoEstuda = prompt("Qual turno você estuda? Digite M para matutino, V para vespertino e N para norturno.").toLowerCase()

//     switch(turnoEstuda){
//         case "m":
//             console.log("Bom dia!")
//             break
//         case "v":
//             console.log("BOa tarde!")
//             break
//         case "n":
//             console.log("Boa noite")
//             break
//         default:
//             console.log("Tente novamente")
//     }
// }
// turno()

// ----> 4°

// const generoFilme = prompt("Qual gênero do filme?").toLowerCase()
// const precoDoIngresso = Number(prompt("Qual preço do filme esta no seu orçamento?"))

// const filme = () => {
//     if (generoFilme == "fantasia" && precoDoIngresso <= 15){
//         console.log("Bom filme!")
//     } else{
//         console.log("Escolhe outro filme :(")
//     }
// }
// filme()

// DESAFIOS

// ----- 1°

// const generoFilme = prompt("Qual gênero do filme?").toLowerCase()
// const precoDoIngresso = Number(prompt("Qual preço do filme esta no seu orçamento?"))
// const lanchinho = prompt("Qual lanche que voce vai comprar?").toLocaleLowerCase()

// const filme = () => {
//     if (generoFilme == "fantasia" && precoDoIngresso <= 15){
//         console.log("Bom filme!")
//         console.log(`Aproveite o seu ${lanchinho}.`)

//     } else{
//         console.log("Escolhe outro filme :(")
//     }
// }

// filme()

// -----> 2°

const valorTotal = () => {

    const nomeCompleto = prompt("Informe seu nome completo.").toLowerCase()
    const tipoDeJogo = prompt("Informe o tipo de jogo. (IN- internacional, DO - domestico)").toLowerCase()
    const etapaDoJogo = prompt("Informe a etapa do jogo. (SF - semi-final, DT - decisão de 3° lugar, FI - final").toLowerCase()
    const categoriaDoJogo = Number(prompt("Informe a categoria. 1, 2, 3 ou 4"))
    const ingressos = Number(prompt("Informe a quantidade de ingressos."))

    const valorDolar = 4.1
    let valorFinal = 0

    switch (etapaDoJogo) {
        case "sf": 
            
            switch (categoriaDoJogo) {

                case 1:
                    valorFinal = 1320
                    break

                case 2:
                    valorFinal = 880
                    break

                case 3:
                    valorFinal = 550
                    break
                
                case 4:
                    valorFinal = 220
                    break
            }
            break

        case "dt":
            switch (categoriaDoJogo) {

                case 1:
                    valorFinal = 660
                    break

                case 2:
                    valorFinal = 440
                    break

                case 3:
                    valorFinal = 330
                    break
                
                case 4:
                    valorFinal = 170
                    break
            }
            break

        case "fi":
            switch (categoriaDoJogo) {

                case 1:
                    valorFinal = 1980
                    break

                case 2:
                    valorFinal = 1320
                    break

                case 3:
                    valorFinal = 880
                    break
                
                case 4:
                    valorFinal = 330
                    break
            }
            break

    }

    valorFinal = valorFinal * ingressos

    switch (tipoDeJogo) {
        case "in":
            valorFinal = valorFinal * valorDolar
            console.log(`
            ---Dados da compra--- 
            Nome do cliente:  ${nomeCompleto}
            Tipo do jogo:  ${tipoDeJogo}
            Etapa do jogo: ${etapaDoJogo}
            Categoria:  ${categoriaDoJogo}
            Quantidade de Ingressos:  ${ingressos}
            ---Valores--- 
            Valor do ingresso:  ${categoriaDoJogo}
            Valor total:  U$ ${valorFinal}`)
            break
        case "do":
            console.log(
                `---Dados da compra--- 
            Nome do cliente:  ${nomeCompleto}
            Tipo do jogo:  ${tipoDeJogo}
            Etapa do jogo: ${etapaDoJogo}
            Categoria:  ${categoriaDoJogo}
            Quantidade de Ingressos:  ${ingressos}
            ---Valores--- 
            Valor do ingresso:  ${categoriaDoJogo}
            Valor total:  U$ ${valorFinal}`)
    }

}

valorTotal()

