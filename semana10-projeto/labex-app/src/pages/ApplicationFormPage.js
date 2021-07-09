import React from 'react';
import Button from '../styled/ButtonGeral'
import { Conteiner } from '../styled/Conteiner';
import { ConteinerInput } from '../styled/ConteinerInput'
import { SelectPaises } from '../select/selectPaises'
import { FormEstilizado } from '../styled/formStyled';
import { useHistory } from "react-router-dom";
import { SelectStyled } from '../styled/selectStyled'
import { TextoGeral } from '../styled/SloganPageHome'
import axios from 'axios';

export function ApplicationForm () {


    const history = useHistory();

    const goToHome= () => {
        history.push("/");
    };

    const applyTrip = () => {
        const body = {
            name: "",
            age: "",
            applicationText: "",
            profission: "",
            country: ""
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/elaini-coelho-molina/trips/NoIFVcOiSgTKTIPVZwXS/apply", body, {
            headers: { 
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            console.log("Deu certo")
        })
        .catch((err) => {
            console.log(err.message)
        })
    }



    return (
        <Conteiner>
            
            <TextoGeral>Formulario de incrição</TextoGeral>

                <FormEstilizado>

                    <SelectStyled>
                        <option>Escolha uma viagem</option>
                    </SelectStyled>

                    <ConteinerInput
                        name={"nome"}
                        placeholder="Nome"
                        required
                        pattern={"^.{3,}"}
                        title={"O nome deve ter no mínimo 3 letras"}
                     />

                    <ConteinerInput 
                        name={"idade"}
                        type={"number"} 
                        placeholder="Idade"
                        required
                        min={18}
                    />

                    <textarea 
                        name={"texto"}
                        placeholder="Porque voce quer ir?"
                        
                        required
                        title={"O nome deve ter no mínimo 30 letras"}
                     />

                    <ConteinerInput 
                        name={"profissao"}
                        placeholder="Profissão"
                        required
                        title={"O nome deve ter no mínimo 10 letras"}
                    />

                    <SelectPaises 
                        required
                    />
                    

                    <Button onClick={applyTrip()} >Enviar</Button>

                </FormEstilizado>

            <Button onClick={goToHome} >Voltar</Button>

            

        </Conteiner>
    )
}