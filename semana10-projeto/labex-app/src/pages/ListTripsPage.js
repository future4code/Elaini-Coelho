import React from 'react';
import Button from '../styled/ButtonGeral';
import { useHistory } from "react-router-dom";

export function ListTrip () {

    const history = useHistory();

    const goToHome = () => {
        history.push("/");
    };

    const goToApplication = () => {
        history.push("/trips/application");
    };

    

    return (
        <div>
            <Button onClick={goToHome} >Voltar</Button>

            <Button onClick={goToApplication} >Inscreva-se</Button>

            <h2>Lista de viagens</h2>


       

        </div>
    )
}