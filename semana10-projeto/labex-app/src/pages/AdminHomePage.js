import React from 'react';
import Button from '../styled/ButtonGeral'
import { useHistory } from "react-router-dom";
import { Conteiner } from '../styled/Conteiner';

export function AdminHomePage () {

    const history = useHistory();

    const goToHomeAdmin = () => {
        history.goBack("/login")
    }

    const goToHome = () => {
        history.push("/")
    }

    const goToCreateTrip = () => {
        history.push("/admin/trips/create")
    }
    return (
        <Conteiner>

            <h2>Painel Administrativo</h2>

                <Button onClick={goToHome} >Voltar</Button>

                <Button onClick={goToCreateTrip} >Criar viagens</Button>

               <Button onClick={goToHome} >Logout</Button> 
          


        </Conteiner>
    )
}
