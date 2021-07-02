import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";


const CardMatch = styled.div `
    max-width: 650px;
    box-sizing: border-box;
    margin: 0 auto 0 auto;
`

const ImageMatch = styled.img `
    object-fit: cover;
    object-position: center;
    box-sizing: border-box;
`


function Lista() {

    const URL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/elaini-coelho/matches'

    const [matches, setMatches] = useState([])

    const getMatches = () => {
        axios.get(URL)
        .then((res) => {
            setMatches(res.data.matches)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    useEffect(() => {
        getMatches()
    }, [])

    const renderizaLista = matches.map((match) => {
        return (
            <CardMatch className="card mb-3 text-dark">
                <div className="row g-0">
                    <div className="col-md-3">
                        <ImageMatch src={match.photo} className="img-fluid rounded-start" alt={match.name}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{match.name}</h5>
                            <p className="card-text">{match.bio}</p>
                        </div>
                    </div>
                </div>
            </CardMatch>
        )
    })

    return(
        <div className='container py-3 text-light'>
            {renderizaLista}
        </div>
    )

}

export default Lista