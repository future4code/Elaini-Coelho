import connection from '../../database';
import Produto from '../produto';

class ProdutoQuery {

    public static async getProduto() {
        try {
            const produtoQuery = await connection('produtos');
            const produtos = produtoQuery.map(produto => {
                return new Produto(
                    produto.id,
                    produto.nome,
                    produto.descricao,
                    produto.preco
                )
            });
            return produtos;
        }
        catch(e) {
            console.log(e)
        }
    }
}

export default ProdutoQuery;