import Produto from './produto';

class Passagem extends Produto {
    private origem: String;
    private destino: String;

    constructor(id: Number, nome: String, descricao: String, preco: Number, origem: String, destino: String){
        super(id, nome, descricao, preco);
        this.origem = origem;
        this.destino = destino;
    }

    public getOrigem(): String {
        return this.origem;
    }

    public setOrigem(origem: String): void {
        this.origem = origem;
    }

    public getDestino(): String {
        return this.destino;
    }

    public setDestino(destino: String): void {
        this.destino = destino;
    }
}

export default Passagem;