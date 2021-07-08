import React from 'react';
import Button from '../styled/ButtonGeral'
import { Conteiner } from '../styled/Conteiner';
import { ConteinerInput } from '../styled/ConteinerInput'
import { SelectPaises } from '../select/selectPaises'
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";

export function ApplicationForm () {

    const { form, onChange, cleanFields } = useForm({
        nome: "",
        idade: "",
        texto: "",
        profissao: "",
        paises: ""
    });

    const travelregistration = (e) => {
        e.preventDefault();
        console.log("OK", form)
        cleanFields();
    }

    const history = useHistory();

    const goToHome= () => {
        history.push("/");
    };



    return (
        <Conteiner>
            <h2>Formulario de incrição</h2>

                <form onSubmit={travelregistration} >

                    <select>
                        <option>Escolha uma viagem</option>
                    </select>

                    <ConteinerInput
                        name={"nome"}
                        placeholder="Nome"
                        value={form.nome}
                        onChange={onChange}
                        required
                        pattern={"^.{3,}"}
                        title={"O nome deve ter no mínimo 3 letras"}
                     />

                    <ConteinerInput 
                        name={"idade"}
                        type={"number"} 
                        placeholder="Idade"
                        value={form.idade}
                        onChange={onChange}
                        required
                        min={18}
                    />

                    <textarea 
                        name={"texto"}
                        placeholder="Porque voce quer ir?"
                        value={form.texto}
                        onChange={onChange}
                        required
                        title={"O nome deve ter no mínimo 30 letras"}
                     />

                    <ConteinerInput 
                        name={"profissao"}
                        placeholder="Profissão"
                        value={form.profissao}
                        onChange={onChange}
                        required
                        title={"O nome deve ter no mínimo 10 letras"}
                    />

                    <SelectPaises 
                        name={"paises"}
                        value={form.paises}
                        required
                    />
                    

                    <Button>Enviar</Button>
                </form>

            <Button onClick={goToHome} >Voltar</Button>

            

        </Conteiner>
    )
}