// Exercícios de interpretação de código

/*
1) a.
Pedindo o primeiro do eleco [0] = Matheus Nachtergaele 
Pedidon o [-1] que seria o ultimo = Virginia Cavendish
Pedindo o altima transmissão = canal: "Globo", horario: "14h"

2) a. 
Vai aparece as informações do cachorro, depois trocar nome por juba e depois por jubo.
b.
traz o que está na array sem precisar declarar cada 1

3) a.
Falso e indefinido.
b.
Falso pq declarou que ele não é backender e indefinido pois a altura dele não foi declarada
*/

// Exercícios de escrita de código

// 1.

const informacoes = {
    nome: "Elaini",
    apelidos: ["Naninha", "Lalinha", "Lala"]
}
function sobreMim(pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}.`)
}

const novasInformacoes = {
    ...informacoes,
    apelidos:["fofa", "bolinha", "gudi"]
}

sobreMim(novasInformacoes)
sobreMim(informacoes)

// 2.

const propriedades = {
    nome: "Vanessa",
    idade: 20,
    profissao: "Advogado"
}

const propriedadesDois = {
    nome: "JP",
    idade:'19',
    profissao: "Dev"
}

function resolver(objeto1, objeto2) {
    const array1 = [
        objeto1.nome,
        objeto1.nome.length,
        objeto1.idade,
        objeto1.profissao,
        objeto1.profissao.length
    ]
    const array2 = [
        objeto2.nome,
        objeto2.nome.length,
        objeto2.idade,
        objeto2.profissao,
        objeto2.profissao.length
    ]

    console.log(array1)
    console.log(array2)
}
resolver(propriedades, propriedadesDois)

// 3.

let carrinho = []

const fruta1 = {
    nome: "Banana",
    disponibilidade: true
}
const fruta2 = {
    nome: "Laranja",
    disponibilidade: true
}
const fruta3 = {
    nome: "Maça",
    disponibilidade: true
}

function adicionaAoCarrinho(fruta) {
    carrinho.push(fruta)
}

adicionaAoCarrinho(fruta1)
adicionaAoCarrinho(fruta2)
adicionaAoCarrinho(fruta3)

console.log(carrinho)