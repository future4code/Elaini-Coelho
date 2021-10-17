

// 1- a) representa uma funsão js que tem o retorno definido, retorna a propria classe.
// b) 

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
}

// nenhuma vez, deu erro.

// c) usando this para compilar.