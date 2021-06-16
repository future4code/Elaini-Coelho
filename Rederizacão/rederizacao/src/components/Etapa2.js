import React from 'react'
import PerguntaAberta from './perguntasAbertas'

export default class Etapa1 extends React.Component {


render () {

    return (
        <div>
        <h2>ETAPA 2 - INFORMAÇÕES EDUCACIONAIS </h2>
        <PerguntaAberta pergunta={"1. Qual o seu curso?"} />
        <PerguntaAberta pergunta={"2. Qual a instituição?"} />
      </div>
    )
}


}