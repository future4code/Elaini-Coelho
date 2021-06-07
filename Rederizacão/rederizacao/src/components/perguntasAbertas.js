import React from "react";

export default class Perguntas extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.pergunta}</p>
        <input />
      </div>
    );
  }
}
