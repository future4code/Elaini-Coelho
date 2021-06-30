import React, {useEffect, useState } from "react";
import axios from 'axios'
import styled from 'styled-components'

const ImagemCard = styled.img `
    width: 300px;
    heigth: 100vh;
    margin: auto;
`
const Conteiner = styled.div `
    width: 450px;
    margin: auto;
    margin-top: 70px;

`

const TextoBody = styled.div `
    text-align: center;
    color: gray;
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
            <h1>Buscando parceiros ...</h1>
        )
    }

    if(error){
        return <h1>Algo deu errado: {error}</h1>
    }
    return(
        <Conteiner> 
            <div className="card mb-3">
                <ImagemCard src={infor.photo} className="card-img-top" alt={infor.name}/>

                <TextoBody className="card-body">
                    <h2 className="card-title">{infor.name}</h2>
                    <h4 className="card-text">{infor.age }</h4>
                    <h6 className="card-text">{infor.bio }</h6>
                </TextoBody>

            </div>
        </Conteiner>
    )
  
}



export default Pessoas
