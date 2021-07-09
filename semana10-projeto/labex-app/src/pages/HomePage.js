import React from 'react';
import Button from '../styled/ButtonGeral'
import { useHistory } from "react-router-dom";
import { Conteiner } from '../styled/Conteiner'
import { TextoGeral } from '../styled/SloganPageHome';

export function HomePage () {
    const history = useHistory();

    const goToTripList = () => {
        history.push("/trips/list");
    };

    const goToLogin = () => {
        history.push("/login");
    };

    return (
        <Conteiner>

            <TextoGeral>Descubra um mundo diferente</TextoGeral>

            <div>
                <Button onClick={goToTripList} >Viagens</Button>

                <Button onClick={goToLogin} >Adminstração</Button>

            </div>
         
        </Conteiner>
    )
}