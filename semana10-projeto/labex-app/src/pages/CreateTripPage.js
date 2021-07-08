import React from 'react';
import Button from '../styled/ButtonGeral'
import { Conteiner } from '../styled/Conteiner';
import { ConteinerInput } from '../styled/ConteinerInput'
import { SelectPlanetas } from '../select/selectPlanetas'
export function CreateTrip () {
    return (
        <Conteiner>
            <h2>Criar Viagem</h2>

            <ConteinerInput
                name={"nome"}
                title={"O nome deve ter no mínimo 5 letras"}
                placeholder="Nome"
                pattern={"^.{5,}"}
                required
            />

            <SelectPlanetas
                name={"planetas"}
                required
            />

            <ConteinerInput
                name={"data"}
                type="date"
            />

            <ConteinerInput 
                title={"O nome deve ter no mínimo 30 letras"}
                placeholder="Descrição"
                required
                name={"descricao"}
            />

            <ConteinerInput 
                min={50}
                placeholder="Duração em dias"
                required
                name={"dias"}
            />

          <Button>Voltar</Button>

          <Button>Criar</Button>

        </Conteiner>
    )
}
