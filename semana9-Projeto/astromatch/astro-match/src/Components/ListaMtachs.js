import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import Navgar from './Navbar'
import Bootbox from 'bootbox-react'


const CardMatch = styled.div `
    max-width: 650px;
    box-sizing: border-box;
    margin: 0 auto 0 auto;
`

const ImageMatch = styled.img `
    height: 120px;
    object-fit: cover;
    object-position: top;
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
            <CardMatch className="card mb-3 mt-5 text-dark">
                <div className="row g-0">
                    <div className="col-md-3">
                        <ImageMatch src={match.photo} className="img-fluid rounded-start" alt={match.name}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-dark">{match.name}</h5>
                            <p className="card-text text-success ">🗨️ Oiiiiiiiiiiiiiiii!</p>
                        </div>
                    </div>
                </div>
            </CardMatch>
        )
    })


    const Url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/elaini-coelho/clear'

    const apagarMensagem = () => {
        axios
          .put(Url)
          .then((res) =>{
                getMatches()
               alert("Tem certeza?");
            
          })
          .catch((error) => {
            return alert(error)
        })
    
    }

    return(
        <div className=' pt-0 pe-0 pb-5 ps-0 text-light'>
            <Navgar />

            <div>
                <button  type="submit" className='btn btn-dark ms-3 mt-3' onClick={apagarMensagem}>Apagar</button>
            </div>
            {renderizaLista}
        </div>
    )

}

export default Lista