import React from "react"

export default class Usuarios extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
        return (
        <div>
            <button>Inicio</button>
            <ul>
                <h2>Usuários Cadastrados:</h2>
                {this.props.mostraUsuario().map(user => (
                <li key={user.id}>
                    {user.name}{" "}
                </li>
                ))}
            </ul>

        </div>

        );
    }
}