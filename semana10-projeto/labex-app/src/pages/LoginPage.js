import React, { useState } from 'react';
import Button from '../styled/ButtonGeral'
import {Lnreye} from '../styled/EmojinOlhos'
import olhoAberto from '../img/olhos.png'

import { OlhosImagem } from '../styled/TamanhoImagemOlhos'
export function LoginPage () {

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

    return (

        <div>
    
            <h2>Login</h2>

            <input placeholder="E-mail" />
            <div>

                <input type={password} name="password" placeholder="Digite sua senha"/>
                <Lnreye onClick={trocandoType}> <OlhosImagem src={olhoAberto}/> </Lnreye>
            
            </div>
            <Button >Voltar</Button>

            <Button>Entrar</Button>
       

        </div>
    )
}