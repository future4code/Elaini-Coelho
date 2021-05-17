//Exercício 1

function inverteArray(array) {
  let arrayInvertido = array.map( (item,indice, array) => {
   return array[array.length - indice - 1];
  })
  return arrayInvertido
  console.log(arrayInvertido)
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
  let paresAoQuadrado = []
  for(elemento of array) {
     if (elemento % 2 === 0) {
        paresAoQuadrado.push(elemento**2)
     }
  } 
   return paresAoQuadrado
}
//Exercício 3

function retornaNumerosPares (array) {
   let recebePares = []
   for (elemento of array) {
      if (elemento % 2 === 0)
      recebePares.push(elemento)
   }
   return recebePares
}

//Exercício 4

function retornaMaiorNumero(array) {
  let valorMinimo = 40
  for (elemento of array) {
     if ( elemento > valorMinimo) {
        return elemento 
     }
   
  }
   return valorMinimo
}
//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3 

   let respostas = []

   respostas.push(booleano1 && booleano2 && !booleano4)
   respostas.push((booleano1 && booleano2) || !booleano3)
   respostas.push((booleano2 || booleano3) && (booleano4 || booleano1))
   respostas.push(!(booleano2 && booleano3) || !(booleano1 && booleano3))
   respostas.push(!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))

   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   let pares = []
   let numero = 0

   while (pares.length < n) {
      
      if (numero % 2 === 0) {
         pares.push(numero)
      }

      numero++

   }

   return pares

}

// Exercício 8

function checaTriangulo(a, b, c) {

   let tipo

   if ((a !== b) && (b !== c) && (c !== a)) {
      tipo = "Escaleno"
   }

   else if ((a === b) && (b === c) && (c === a)){
      tipo = "Equilátero"
   }

   else {
      tipo = "Isósceles"
   }

   return tipo
   
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let maior
   let menor
   
   if (num1 >= num2) {
      maior = num1
      menor = num2
   }
   else {
      maior = num2
      menor = num1
   }

   const divisivel = (maior % menor) === 0
   const diferenca = maior - menor

   const objeto = {
      maiorNumero: maior,
      maiorDivisivelporMenor: divisivel,
      diferenca: diferenca
   }

   return objeto
}

// Exercício 10

function segundoMaiorEMenor(array) {
   
   let listaOrdenada = array

   for (_ of array) {

      for (let i = 0; i < (array.length - 1); i++) {

         if (listaOrdenada[i] > listaOrdenada[i+1]){

            troca = listaOrdenada[i+1]
            listaOrdenada[i+1] = listaOrdenada[i]
            listaOrdenada[i] = troca
         }

      }
   }

   indexSegundoMenor = 1
   indexSegundoMaior = array.length - 2

   return [listaOrdenada[indexSegundoMaior], listaOrdenada[indexSegundoMenor]]
}

//Exercício 11

function ordenaArray(array) {
   
   let listaOrdenada = array

   for (_ of array) {

      for (let i = 0; i < (array.length - 1); i++) {

         if (listaOrdenada[i] > listaOrdenada[i+1]){
            
            troca = listaOrdenada[i+1]
            listaOrdenada[i+1] = listaOrdenada[i]
            listaOrdenada[i] = troca
         }

      }
   }

   return listaOrdenada
}

// Exercício 12

function filmeFavorito() {
   const objeto = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: [
         "Meryl Streep", 
         "Anne Hathaway", 
         "Emily Blunt", 
         "Stanley Tucci"
      ]
   }

   return objeto
}

// Exercício 13

function imprimeChamada() {
   const filme = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: [
         "Meryl Streep", 
         "Anne Hathaway", 
         "Emily Blunt", 
         "Stanley Tucci"
      ]
   }

   texto = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
   
   return texto
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // let maioresDeIdade = []
   // let menoresDeIdade = []
}
// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  
}