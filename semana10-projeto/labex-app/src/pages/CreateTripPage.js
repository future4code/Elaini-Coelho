import React from 'react';
import Button from '../styled/ButtonGeral'
import { Conteiner } from '../styled/Conteiner';
import { ConteinerInput } from '../styled/ConteinerInput'
import { SelectPlanetas } from '../select/selectPlanetas'
import { FormEstilizado } from '../styled/formStyled';
import { useHistory } from "react-router-dom";

export function CreateTrip () {


    const history = useHistory();

    const goToHome= () => {
        history.push("/admin/trips/list")
    };

    return (

        <Conteiner>

            <h2>Criar Viagem</h2>

            <FormEstilizado>

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
                Type={"number"}
                placeholder="Duração em dias"
                required
                name={"dias"}
                />

                <div>
                <Button>Criar</Button>
                </div>

                
            </FormEstilizado>
           

          <Button onClick={goToHome} >Voltar</Button>

          

        </Conteiner>
    )
}
