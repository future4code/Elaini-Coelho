import React, {useEffect, useState } from "react";
import axios from 'axios'
import styled from 'styled-components'

const ImagemCard = styled.img `
    height: 300px;
    object-fit: cover;
    object-position: top;
`
const Conteiner = styled.div `
    max-width: 450px;
    margin: auto;

`
const Spinner = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
`

const TextoBody = styled.div `
    text-align: center;
`

   function Pessoas() {
        const [infor, setInformações] = useState({})
        const [error, setError] = useState("")
        const [recendo, setRecebendo] = useState(true)
      
    
        useEffect(() => {
            axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/elaini-coelho-molina/person")
            
            .then((res) => {
            console.log(res.data.profile)
            setInformações(res.data.profile)
            setRecebendo(false)

        }).catch((error) => {
            console.log(error.data)
            setError(error.message)
            setRecebendo(false)
        })
        }, [])

        if(recendo) {
            return(
                <Spinner className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )
        }

        if(error){
            return <h1>Algo deu errado: {error}</h1>
        }

        return(
            <Conteiner> 

                <div className="card mb-3 shadow-lg border border-dark rounded-lg">
                    <ImagemCard src={infor.photo} className="card-img-top" alt={infor.name}/>
                    <TextoBody className="card-body">
                        <h5 className="card-title">{infor.name}</h5>
                        <p className="card-text">{infor.age }</p>
                        <p className="card-text"><small className="text-muted">{infor.bio }</small></p>
                    </TextoBody>
                </div>
            </Conteiner>

        )
  
}



export default Pessoas
