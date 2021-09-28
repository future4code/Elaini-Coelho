import connection from '../../database';
import Usuario from '../usuario';

class UsuarioQuery {

    public static async getUsuarios() {
        try {
            const usuariosQuery = await connection('usuarios');
            const usuarios = usuariosQuery.map(usuario => {
                return new Usuario(
                    usuario.id,
                    usuario.nome,
                    usuario.email,
                    usuario.idade
                )
            });
            return usuarios;
        }
        catch(e) {
            console.log(e)
        }
    }
}

export default UsuarioQuery;