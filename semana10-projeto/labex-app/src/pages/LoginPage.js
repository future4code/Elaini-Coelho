import React, { useState } from 'react';
import Button from '../styled/ButtonGeral'
import {Lnreye} from '../styled/EmojinOlhos'
import olhoAberto from '../img/olhos.png'
import { useHistory } from "react-router-dom";
import { Conteiner } from '../styled/Conteiner'
import { ConteinerInput } from '../styled/ConteinerInput';
import { OlhosImagem } from '../styled/TamanhoImagemOlhos'
import { TextoGeral } from '../styled/SloganPageHome'
import axios from 'axios';


export function LoginPage () {

    const [password, usePassword] = useState("password");

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


    const history = useHistory();
    const [email, setEmail] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
      };
    
      const onChangePassword = (event) => {
        setPasswordInput(event.target.value);
      };

    const goToLogin = () => {
        history.push("/login");
    };

    const LoginAdmin = () => {
        const body = {
            "email": "astrodev@gmail.com.br",
            "password": "123456"
        };
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/elaini-coelho-molina/login", body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            console.log(res.data)
            history.push("/admin/trips/list")
        })
        .catch((err) => {
            console.log(err)
            alert("Usario não encontrado.")
        })
    }

    const onSubmitForm = (event) => {
              event.preventDefault();
        // eslint-disable-next-line no-undef
              LoginAdmin()
            };

    return (

        <Conteiner>
            <Button onClick={goToLogin} >Voltar</Button>
           
            <TextoGeral>Login</TextoGeral>

            <form onSubmit={onSubmitForm} >
                <div>
                <ConteinerInput 
                placeholder="E-mail"
                type={"email"}
                name={"email"}
                value={email}
                onChange={onChangeEmail}
                required
                />
                </div>
                
                <div>

                    <ConteinerInput 
                    required
                    type={password} 
                    name={"password"}
                    value={passwordInput}
                    onChange={onChangePassword}
                    placeholder="Digite sua senha"/>
                    <Lnreye onClick={trocandoType}> <OlhosImagem src={olhoAberto}/> </Lnreye>
                    
                </div>
                <div>
                    <Button>Entrar</Button>
                </div>
            </form>
        </Conteiner>
    )
}