import React, { useState } from 'react';
import Button from '../styled/ButtonGeral'
import {Lnreye} from '../styled/EmojinOlhos'
import olhoAberto from '../img/olhos.png'
import { useHistory } from "react-router-dom";
import { Conteiner } from '../styled/Conteiner'
import { ConteinerInput } from '../styled/ConteinerInput';
import { OlhosImagem } from '../styled/TamanhoImagemOlhos'
export function LoginPage () {
    const history = useHistory();

    const [password, usePassword] = useState("password")
    const trocandoType = () => {
        if(password === "password") {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            usePassword("text")
        }
        else if (password === 'text') {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            usePassword('password')
        }
    }

    const goToLogin = () => {
        history.push("/");
    };

    return (

        <Conteiner>
    
            <h2>Login</h2>

            <ConteinerInput 
            placeholder="E-mail"
            type={"email"}
            name={"email"}
            required
            />

            <div>

                <ConteinerInput 
                required
                type={password} 
                name={"password"}
                placeholder="Digite sua senha"/>
                <Lnreye onClick={trocandoType}> <OlhosImagem src={olhoAberto}/> </Lnreye>
                
            </div>
            
            <Button>Entrar</Button>
            <Button onClick={goToLogin} >Voltar</Button>

            
       

        </Conteiner>
    )
}