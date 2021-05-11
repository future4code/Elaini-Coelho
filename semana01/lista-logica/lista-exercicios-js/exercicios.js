// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {

   const altura = prompt('Digite a altura')
   const largura = prompt('Digite a largura')

   console.log(altura * largura)
}

//Exercício 2

function imprimeIdade() {
   const anoAtual = prompt("Qual o ano que estamos?")
   const anoNascimento = prompt("Qual seu ano de nascimento?")

   console.log(anoAtual - anoNascimento)
}

//Exercício 3

function calculaIMC(peso, altura) {

   return peso / (altura * altura)

}

//Exercício 4

function imprimeInformacoesUsuario() {
   const nome = prompt("Qual seu nome?")
   const idade = prompt("Qual sua idade?")
   const email = prompt("Qual seu email?")

   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

//Exercício 5

function imprimeTresCoresFavoritas() {
   let cor1 = prompt("Qual sua cor favorita?")
   let cor2 = prompt("Qual sua cor favorita?")
   let cor3 = prompt("Qual sua cor favorita?")

   let cores = [cor1, cor2, cor3]

   console.log(cores)
}

//Exercício 6

function retornaStringEmMaiuscula(string) {

   return string.toUpperCase()
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   // implemente sua lógica aqui
   return custo / valorIngresso
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
   // implemente sua lógica aqui
   const checando = string1.length === string2.length
   return checando
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
   return array[0]
}

// Exercício 10

function retornaUltimoElemento(array) {
   const elemento = array[array.length - 1]

   return elemento
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   let primeiro = array[0]
   array[0] = array[array.length - 1]
   array[array.length - 1] = primeiro
   return array

}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui

   return string1.toUpperCase() == string2.toUpperCase()
}

// Exercício 13

function checaRenovacaoRG(anoAtual, anoNascimento, indentidade) {
  
   const anoAtual = Number(prompt("Diga o ano atual."))
   const anoNascimento = Number(prompt("Ano do seu nascimento"))
   const indentidade = Number(prompt("Digite ano que tirou seu RG"))

   // const ano = anoAtual - anoNascimento
   // const rg = anoAtual - indentidade 
   // const resultado = (rg< 21 && indentidade > 5) || ((ano > 20 && anoAtual < 50) && indentidade > 90) || (ano > 49 && indentidade > 14)

   // console.log(resultado)
}
   

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu() {
   // implemente sua lógica aqui
   let idade = prompt("Você tem mais de 18 anos?")
   let escolaridade = prompt("Você possui ensino médio completo?")
   let curso = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

   const temMaisDe18 = idade.toLowerCase() == 'sim'
   const ensMedioCompleto = escolaridade.toLowerCase() == 'sim'
   const disponibilidadeCurso = curso.toLowerCase() == 'sim'

   const resultado = temMaisDe18 && ensMedioCompleto && disponibilidadeCurso

   return resultado
}