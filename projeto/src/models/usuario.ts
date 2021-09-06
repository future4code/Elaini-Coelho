class Usuario {
    private id: Number;
    private nome: String;
    private email: String;
    private idade: Number;

    constructor(id: Number, nome: String, email: String, idade: Number){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.idade = idade;
    }

    public getId(): Number {
        return this.id;
    }

    public getNome(): String {
        return this.nome;
    }

    public setNome(nome: String): void {
        this.nome = nome;
    }

    public getEmail(): String {
        return this.email;
    }

    public setEmail(email: String): void {
        this.email = email;
    }

    public getIdade(): Number {
        return this.idade;
    }

    public setIdade(idade: Number): void {
        this.idade = idade;
    }
}

export default Usuario;