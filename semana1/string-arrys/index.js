// Exercícios de interpretação de código

/*
-------------> EXERCÍCIO 1 <--------------------

a.não tem valor então vai da undefined
b. como array = null, então resposta é null
c.vai contar 11 pois começa do 0
d. como conta do apartir do 0, então quem sai é o 3.
e. 1 antes era o 4 e agora passa a ser o 19.
f.posição 6 tem o numero 9

*/

/*
-------------> EXERCÍCIO 2 <--------------------

Vai repassar uma frase em maiuscula pelo uso do toUpperCase(),
Vai trocar a letra A por I
Vai me dizer quantas letras tem pelo uso do length

*/



// Exercícios de escrita de código 

/*
-------------> EXERCÍCIO 1 <--------------------


let nome = prompt("Qual seu nome?");
let email = prompt("Qual seu email?");

console.log("O e-mail", email.trim(), "foi cadastrado com sucesso. Seja bem-vindo(o)", nome, ".");

*/

/*
-------------> EXERCÍCIO 2 <--------------------


let comidas = [
    "Lasanha","Macarronada", "Feijonada","Salada","Pastel"
];

console.log(
    `${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`);

let usuario = prompt("Qual sua comida favorita?");

comidas[1] = usuario
console.log(comidas);
*/



/*
-------------> EXERCÍCIO 3 <--------------------


let listaDeTarefas = []

let tarefa1= prompt("Digite uma tarefa do dia a dia!")
let tarefa2 = prompt("Digite outra tarefa do dia a dia");
let tarefa3 = prompt("Digite a ultima tarefa do dia a dia.");

listaDeTarefas.push(tarefa1, tarefa2, tarefa3);

console.log(listaDeTarefas);

let indice = prompt("Qual dessas 3 voce já realizou?");

listaDeTarefas.splice(indice,[1]);

console.log(listaDeTarefas);
*/
