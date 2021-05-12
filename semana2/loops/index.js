// Exercícios de interpretação de código
/* 
------ 1°
10

------ 2°
a. 19, 21,23,25,27,30, numero maior que outro a partir de 18.

b. Sim, fazendo um varivael e adiconando ela com for ... of.

------ 3°

Iria repetir o 0, 4 vezes na sequencia que de 4.
0
00
000
0000

*/


// Exercícios de escrita de código

// ------ 1°

// let quantidadeAnimaisUsuario = Number(prompt("Quantos animais de estimação você tem?"))
// let animais = []

// if (quantidadeAnimaisUsuario === 0){

//     console.log('Que pena! Você pode adotar um pet!')
// }
// else {

    // for (let i = 0; i < quantidadeAnimaisUsuario; i++) {

    //     let nomeAnimal = prompt(`Informe o nome do ${i+1}º pet`)
    //     animais.push(nomeAnimal)
    // }

    // console.log(animais)

    // let i = 0
    // while (i < quantidadeAnimaisUsuario) {
    //     let nomeAnimal = prompt(`Informe o nome do ${i+1}º pet`)
    //     animais.push(nomeAnimal)

    //     i++
    // }

    // console.log(animais)
// }

// ------- 2°

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// const imprimeArray = (array) => {
//     for(elemento of array){
//         console.log(elemento)
//     }
// }
// imprimeArray(array)


// for(let divide of array) {
//     divide /= 10;
//     console.log(divide)
// }

const imprimirPares = (array)=>{
    let arrayUm = []
    for(let i=0; i<numero.length; i++){
        if(array[i] % 2 === 0){
            arrayUm.push(array[i])
        }
    }

    console.log(arrayUm)
}
imprimirPares()