// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  let tamanho = array.length

  return tamanho

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    let arrayInvertido = array.slice(0).reverse()

    return arrayInvertido;
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
    let ordenado = array.sort((a,b) => a-b)

    return ordenado;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    let numeros = array.filter(pares => (pares %2)== 0)
    return numeros;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    let numeros = array.filter(pares => (pares %2)== 0)
    
    let elevado = numeros.map(x => x**2)

    return elevado;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    let maior = Math.max.apply(null, array)
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maiorNumero = Math.max(num1, num2)
    let maiorDivisivelPorMenor = (num1/num2 ? true : false)
    let diferenca = num1 > num2 ? num1-num2 : num2-num1
    
    return ` maiorNumero:${maiorNumero}, maiorDivisivelPorMenor: ${maiorDivisivelPorMenor}, diferenca:${diferenca}`

}
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    let pares = []
    for(let i = 0; pares.length < n; i++) {
        if(i % 2 === 0) {
            pares.push(i)
        }
    }
    return pares
  
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}