class Produto {
    private id: Number;
    private nome: String;
    private descricao: String;
    private preco: Number;

    constructor(id: Number, nome: String, descricao: String, preco: Number){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
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

    public getDescricao(): String {
        return this.descricao;
    }

    public setDescricao(descricao: String): void {
        this.descricao = descricao;
    }

    public getPreco(): Number {
        return this.preco;
    }

    public setPreco(preco: Number): void {
        this.preco = preco;
    }
}

export default Produto;