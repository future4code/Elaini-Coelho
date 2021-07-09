import React, { useState } from 'react';
import axios from 'axios';
import Button from '../styled/ButtonGeral';
import { useHistory } from "react-router-dom";
import { Conteiner } from '../styled/Conteiner'
import { TextoGeral } from '../styled/SloganPageHome';
import { CardList } from '../styled/cardList';

export function ListTrip () {

    const history = useHistory();

    const goToHome = () => {
        history.push("/");
    };

    const goToApplication = () => {
        history.push("/trips/application");
    };

    const [trips, setTrips] = useState([])

        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/elaini-coelho-molina/trips")
        .then((res) => {
            setTrips(res.data.trips)
        })
        .catch((err) => {
            console.log(err.message)
        })

    const RenderizandoTela = trips.map((list) => {
        return (
            
            <CardList>
                <h2>{list.name}</h2>
                <p>Planeta: {list.planet}</p>
                <p>Duração em dias: {list.durationInDays}</p>
                 <p>Descrição: {list.description}</p>
            </CardList>
        ) 
        
    })

    return (
        <Conteiner>
            <div>
                <Button onClick={goToHome} >Voltar</Button>

                <Button onClick={goToApplication} >Candidatar</Button>

            </div>
            
            <TextoGeral>Lista de viagens</TextoGeral>

            {RenderizandoTela}
       

        </Conteiner>
    )
}