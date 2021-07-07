import React from 'react';
import Button from '../styled/ButtonGeral'
import { Conteiner } from '../styled/Conteiner';
import { ConteinerInput } from '../styled/ConteinerInput'

export function CreateTrip () {
    return (
        <Conteiner>
            <h2>Criar Viagem</h2>

            <ConteinerInput placeholder="Nome"/>

            <select>
                <option>Escolha um planeta</option>
                <option>Mercúrio</option>
                <option>Vênus</option>
                <option>Terra</option>
                <option>Marte</option>
                <option>Júpiter</option>
                <option>Saturno</option>
                <option>Urano</option>
                <option>Netuno</option>

            </select>

            <ConteinerInput type="date"/>

            <ConteinerInput placeholder="Descrição"/>

            <ConteinerInput placeholder="Duração em dias"/>

          <Button>Voltar</Button>

          <Button>Criar</Button>



        </Conteiner>
    )
}
