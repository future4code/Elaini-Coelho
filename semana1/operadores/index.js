// Exercícios de interpretação de código

// ........................> EXERCÍCIO 1 <..........................

/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
 ..... Resposta = retorna falso pois se ambos fossem verdadeiros retornaria verdadeiro. ......

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
....... Resposta = resultado retorna falso, pois o !bool2 é negação. ......

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
........ Resposta = retorna verdadeiro, pois !resultado retorna verdeiro e bool1 ou bool2 retorna verdadeiro. .....

console.log("d. ", typeof resultado)
..... Resposta = boolean ........
*/

// ......................> EXERCÍCIO 2 <..............................

/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

 ............> Resposta: Vai ser imprimido como string e vai ser só primeiroNumero ao lado do segundoNumero.
    para fazer a soma precisa colocar Number antes do prompt, assim console vai entender que é para somar.<.......
 */

//.....................> EXERCÍCIO 3 <............................

/*
let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));
    
const soma = primeiroNumero + segundoNumero
    
console.log(soma);
*/

// Exercícios de escrita de código

// ..................> EXERCÍCIO 1 <........................

/*
let idadeDoUsuario = Number(prompt("Qual sua idade?"));
let idadeDoAmigo = Number(prompt("Qual a idade do seu BFF?"));

let idadeMaior = (idadeDoUsuario > idadeDoAmigo);

console.log("Sua idade é maior que do seu amigo?", idadeMaior);

console.log("Diferença entre as idades é de:", idadeDoUsuario - idadeDoAmigo);
*/

// ................> EXERCÍCIO 2 <........................
/*
let numeroPar = Number(prompt("Coloque um numero par!"));
let restoDaDivisao = numeroPar % 2;

console.log(" Seu numero divido por 2 fica:", restoDaDivisao)

// .....> Resposta = Padrão é que todo numero par vai ter o resto 0, pois os restos possiveis de 2 são 1 ou 0, então se 
// colocarem algum numero impar, vai ter resto 1. <..........
*/

// ................> EXERCÍCIO 3 <..................
/*

let idadeEmAnos = prompt("Qual sua idade?");

console.log("Sua idade em meses é ", idadeEmAnos * 12);
console.log("Sua idade em dias", idadeEmAnos * 365);
console.log("Sua idade em horas é", idadeEmAnos * 8760);

// 1 Ano tem 12 meses, 365 dias e 8760 horas.
*/

// ..................> EXERCÍCIO 4 <...................

/*
let primeiro = Number(prompt("Me diga um numero"));
let segundo = Number(prompt("Me diga outro numero"));

let divisao = (primeiro%segundo) === 0;


console.log("O primeiro numero é maior que segundo?", primeiro > segundo);
console.log("O primeiro numero é igual ao segundo?", primeiro === segundo);
console.log("O primeiro numero é divisível pelo segundo?", divisao);
console.log("O segundo numero é divisível pelo primeiro?", divisao);
*/