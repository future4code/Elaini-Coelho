// Exercicio 2

function obterEstatisticas(numeros : number[])  {


    const amostraDeIdades = {
    
        numeros: [21, 18, 65, 44, 15, 18],
        numerosOrdenados: numeros.sort(
        (a, b) => a - b
    )
    }

    let soma = 0

    for (let num of amostraDeIdades.numeros) {
        soma += num
    }

    const estatisticas = {
        maior: amostraDeIdades.numerosOrdenados[numeros.length - 1],
        menor: amostraDeIdades.numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}