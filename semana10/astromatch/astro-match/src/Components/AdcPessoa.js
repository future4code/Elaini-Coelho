import React, { useEffect, useState } from "react";
import axios from 'axios'
import styled from 'styled-components'
import Matchs from './Matchs'


const ImagemCard = styled.img `
    height: 300px;
    object-fit: cover;
    object-position: top;

`
const Conteiner = styled.div`
    max-width: 450px;
    margin: auto;
    margin-top: 10px;

`
const Spinner = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
`

const TextoBody = styled.div `
    text-align: center;
`


const Pessoas = () => {

    const URL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/elaini-coelho/person'

    const [perfil, setPerfil] = useState({})
    const [error, setError] = useState(null)
    const [recebendo, setRecebendo] = useState(true)
    const [perfilId, setPerfilId] = useState(null)


    const proximoPerfil = () => {
        axios.get(URL)
        .then((res) => {
            setPerfil(res.data.profile)
            setPerfilId(res.data.profile.id)
            setRecebendo(false)
        })
        .catch((error) => {
            setError(error.message)
            setRecebendo(false)
        })
    }


    useEffect(() => {
        proximoPerfil()
    }, [])

    if(recebendo) {
        return(
            <Spinner className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    if(error){
        <div className="alert alert-light" role="alert">
            {error}
        </div>
    }
    
    
    return(

        <Conteiner> 

            <div className="card mb-3 shadow-lg border border-dark rounded-lg">
                <ImagemCard src={perfil.photo} className="card-img-top" alt={perfil.name}/>
                <TextoBody className="card-body">
                    <h5 className="card-title">{perfil.name}</h5>
                    <p className="card-text">{perfil.age}</p>
                    <p className="card-text"><small className="text-muted">{perfil.bio}</small></p>
                </TextoBody>
            </div>
            
            <Matchs perfilId={perfilId} proximoPerfil={proximoPerfil}/>
        </Conteiner>   
        
    )
  
}


export default Pessoas
