import React from 'react';
import Button from '../styled/ButtonGeral'
import { useHistory } from "react-router-dom";

export function HomePage () {
    const history = useHistory();

    const goToTripList = () => {
        history.push("/trips/list");
    };

    const goToLogin = () => {
        history.push("/login");
    };

    return (
        <div>
            <h2>LabeX</h2>
          <Button onClick={goToTripList} >Viagens</Button>

          <Button onClick={goToLogin} >Adminstração</Button>

        </div>
    )
}