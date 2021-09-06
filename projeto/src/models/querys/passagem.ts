import connection from '../../database';
import Passagem from '../passagem';

class PassagemQuery {

    public static async getPassagem() {
        try {
            const passagemQuery = await connection('passagens');
            const passagem = passagemQuery.map(passagem => {
                return new Passagem(
                    passagem.id,
                    passagem.nome,
                    passagem.descricao,
                    passagem.preco,
                    passagem.origem,
                    passagem.destino
                )
            });
            return passagem;
        }
        catch(e) {
            console.log(e)
        }
    }
}

export default PassagemQuery;