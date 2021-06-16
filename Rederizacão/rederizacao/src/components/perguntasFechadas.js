import React from "react";

export default class Perguntas extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.pergunta}</p>
        <select>
        {this.props.opcoes.map(opcao => {
           return <option>{opcao}</option>
        })}
        </select>
      </div>
    );
  }
}