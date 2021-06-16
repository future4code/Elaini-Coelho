import React from 'react';
import styled from 'styled-components'
import Usuarios from './componets/Usuarios'
import TelaCadastro from './componets/telaCadastro'


export default class App extends React.Component {

  state = {
    telaAtual: "cadastro"
  }


  escolheTela = () => {
    switch(this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaUsuario={this.irParaUsuario} />
      case "usuario":
        return <Usuarios irParaCadastro={this.irParaCadastro} />
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

  render() {

    return (
      <div>
        {this.escolheTela()}
      </div>

    )
  }
}
