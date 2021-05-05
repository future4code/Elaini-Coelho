// Exercícios de interpretação de código
/*

1. que será impresso no console ..

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
 #####################################
Resposta = Certo! Let variavel muda o valor, console.log(10,5)

.........................................

2. Analise o programa abaixo e diga o que será impresso no console.

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

########################
Resposta. c fica com valor de a, b com valor de c e o a com valor de b.
console.log(20, 10,10)

...........................................

3.Analise o programa abaixo, entenda o que ele faz e sugira melhores 
nomes para as variáveis. Lembre-se que devemos escolher nomes 
significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
######################################
Resposta = 
let horasTrabalhada = prompt("Quantas horas você trabalha por dia")
let remuneracaoDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${remuneracaoDia/horasTrabalhada} por hora`)

.................................................

*/

/* Exercícios de escrita de código

.....................................

1.Construa um programa, seguindo os seguintes passos: 

....................................

*/
let nome

let idade

console.log("Seu nome é", typeof nome);

console.log("Sua idade é", typeof idade);

//Resposta d =  Como a variavel não esta atribuida e assim da erro.

let nomeDoUsario = prompt("Qual seu nome?")
let idadeDoUsario = prompt("Qual sua idade?")

console.log(nomeDoUsario)
console.log(idadeDoUsario)

console.log("Olá", nomeDoUsario, "voce tem", idadeDoUsario, "anos.")

/*
.....................................
2.Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável.
......................................
*/
 // Primeiro fiz as 3 variaves contendo a pergunta.
const primeiraPergunta = "Lavou o cabelo hoje?"
const segundaPergunta = "Voce gostou da saida do gil?"
const terceiraPergunta = "Voce assiste bbb?"
// Depois criei prompts para junção de pergunta e resposta
const primeira = prompt(primeiraPergunta)
const segunda = prompt(segundaPergunta)
const terceira = prompt(terceiraPergunta)

console.log(primeiraPergunta + primeira)
console.log(segundaPergunta + segunda)
console.log(terceiraPergunta + terceira)

/*
.....................................
3.Dadas duas variáveis a e b com valores diferentes, troque o conteúdo delas sem atribuir diretamente os valores!
......................................
*/

let a = 20
let b = 55

let troca = a

a = b
b = troca
// Atribui valor de a,b e definir uma terceira variavel chamada troca
// que recebe valor de a nisso b tem valor de a.