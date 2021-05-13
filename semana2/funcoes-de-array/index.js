// Exercícios de interpretação de código

/* 
----- 1° 

a. Posição de cada intem do array.

----- 2°

a. Apenas o nome que esta no array

----- 3°

a. Apenas amanda e lais.

*/

// Exercícios de escrita de código

// -------- 1°
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

// //a. 
// const nomeDosPets = pets.map((nome) => {
//     return nome.nome
// })
// console.log(nomeDosPets)

// //b.
// const dogSalsinha = pets.filter((cachorro) => {
//     return cachorro.raca == "Salsicha"
// })
// console.log(dogSalsinha)

//c.
// const desconto = pets.filter( (dog) => {
//     return dog.raca === "Poodle"
// }).map((dog) => {
//     return dog.nome
// })
// console.log(`Voce ganhou um cupom desconto de 10% off para tosa de ${desconto[0]}`)
// console.log(`Voce ganhou um cupom desconto de 10% off para tosa de ${desconto[1]}`)


// ------ 2°

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// //a.
// const arrayNome = produtos.map( (nomes) => {
//     return nomes.nome
// })
// console.log(arrayNome)

//b.
// const descontoCinco = () => {
//     let produtosDesconto = []

//     for (produto of produtos) {
//         preco = produto.preco * 0.95
//         nome = produto.nome
//         produtosDesconto.push(
//             {nome: nome, preco: preco.toFixed(2)}
//         )
//     }

//     return produtosDesconto
// }
// console.log(descontoCinco())

//c.
// const procurando = produtos.filter( (procura) => {
//     return procura.categoria === "Bebidas"
// })
// console.log(procurando)

//d.
// const ype = produtos.filter( (procura) => {
//     return procura.nome.includes('Ypê')
// })
// console.log(ype)

// //e.
// const ype = produtos.filter( (procura) => {
//     return procura.nome.includes('Ypê')
// }).map( (produto) => {
//     return `Compre ${produto.nome} por ${produto.preco}`
// })
// console.log(ype)

// Desafio

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

//a.
// const pokemon = pokemons.map( (nome) => {
//     return nome.nome
// }).sort()
// console.log(pokemon)

//b.
const repetido = pokemons.filter( (tipo) => {
    for(tipo of pokemons) {
        [...new Set(pokemons)]
    }
})
console.log(repetido)