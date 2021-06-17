import React from 'react';
import Usuarios from './componets/Usuarios'
import TelaCadastro from './componets/telaCadastro'
import Detalhes from './componets/Detalhe'


export default class App extends React.Component {

  state = {
    telaAtual: "cadastro"
  }


  escolheTela = () => {
    switch(this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaUsuario={this.irParaUsuario} />
      case "usuario":
        return <Usuarios irParaCadastro={this.irParaCadastro} irParaDetalhes={this.irParaDetalhes} />
      case "detalhes":
        return <Detalhes irParaUsuario={this.irParaUsuario} />
        default:
        return <div>Erro</div>
    }
  }


    irParaCadastro = () => {
      this.setState({telaAtual:"cadastro"})
    }

    irParaUsuario = () => {
      this.setState({telaAtual: "usuario"})
    }

    irParaDetalhes = () => {
      this.setState({telaAtual: "detalhes"})
    }
  render() {

    return (
      <div>
        {this.escolheTela()}
      </div>

    )
  }
}
