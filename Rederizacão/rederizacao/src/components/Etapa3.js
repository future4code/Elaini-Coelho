import React from 'react'
import PerguntaAberta from './perguntasAbertas'
export default class Etapa1 extends React.Component {

render () {

    return (
  <div>
        <h2>ETAPA 3</h2>
        <PerguntaAberta
          pergunta={"1. Por que você não terminou nenhum curso?"}
        />

        <p>4. Qual é a sua escolaridade?</p>

        <select>
          <option>Cursos de inglês</option>
          <option>Ensino médio incompleto</option>
          <option>Não fiz curso complementar</option>
        </select>
        
    </div>
    )
}


}