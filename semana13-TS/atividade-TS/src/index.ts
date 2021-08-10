// Exercicio 1

let minhaString : string = "Elaini Coelho"
// Atribui numero não da pois o tipo já está especificado"

let meuNumero : number = 2136085
// Para variavel receber numero colocamos:
let meuNumeroDois : number | string  = "Dois" && 2


export type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum CORES {
    AZUL = "azul",
    VERMELHO = "vermelho",
    AMARELO = "amarelo",
    VERDE = "verde"
}

const dados: pessoa = {
    nome : "João",
    idade: 20,
    corFavorita: CORES.AZUL
}