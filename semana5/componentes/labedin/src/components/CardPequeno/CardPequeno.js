import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return(
        <div className="peqcard-container">
        <div>
            <img src={ props.imagem} />
            <h4>{ props.email }</h4>
            <h4>{ props.endereco }</h4>
        </div>
    </div>
    )
}

export default CardPequeno;