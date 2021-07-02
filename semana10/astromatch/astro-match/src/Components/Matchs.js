import React from "react";
import axios from 'axios'
import styled from 'styled-components'
import sim from './Img/sim.png'
import nao from './Img/não.png'


const BotãoDeSimOuNão = styled.button ` 
    background-color: transparent;
    width: 90px;
    height: 70px;
    margin: auto;
    border: none;
    align-items: center;
`

const Imagens = styled.img ` 
    width: 60px;
    height: 50px;
`

const ConteinerMatch = styled.div `
    display: flex;
    justify-content: space-evenly;
    margin: auto;
`

const Matchs = (props) => {

    const URL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/elaini-coelho/choose-person'

    const sendLike = (like) => {
        if (like) {

            const requestData = {
                id: props.perfilId,
                choice: like
            }
    
            axios.post(URL, requestData, {
                headers: {
                    'Content-Type': "application/json"
                }
            })
            .then((res) => {
                return res.data
        
            })
            .catch((err) => {
                return (
                    <div class="alert alert-light" role="alert">
                        {err.message}
                </div>
                )
                
            })
        }

        props.proximoPerfil()

    }



    return (
        <ConteinerMatch>
            <BotãoDeSimOuNão  onClick={() => sendLike(true)} ><Imagens src={sim} /></BotãoDeSimOuNão>
            <BotãoDeSimOuNão onClick={() => sendLike(false)} type="submit" ><Imagens src={nao} /> </BotãoDeSimOuNão>
            

        </ConteinerMatch>    
    )
}

export default Matchs

    


