/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import axios from 'axios'
import seta from '../img/botao.png'
import styled from 'styled-components'
import body from '../img/Body.jpg'

const ButtonImg = styled.img` 
    width: 20px;
    object-fit: cover;

`
const Button = styled.button `
    background-color: transparent;
    border:none;
    cursor: pointer;
`
const DivInput = styled.div ` 
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`
const Conteiner = styled.div `
    display: flex;
    justify-content:center;
    height:450px;
    object-fit: cover;
`

const TudaDiv = styled.div `
    background-color:black;
    box-sizing: border-box;

`
const ButtonList = styled.button `
    border: none;
    cursor: pointer;
    font-family: 'Roboto Mono';
    margin: 5px 0 0 10px;
    :hover{
        color:	#FF4500;
    }
`

const Input = styled.input ` 
    height:22px;
    border: none;
    background-color:#E8E8E8;

`


export default class PlayList extends React.Component {

    state = {
        nome:""
    }

    inputNome = (e) => {
        this.setState({nome: e.target.value})
    }

    adcPlayList = () => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome
        }
        axios.post(url, body, {
            headers: {
                Authorization: "elaini-coelho-molina"
            }
        })
        .then((res) => {
            alert("Playlist criada!")
            this.setState({nome:""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })

        

    }


    render() {
        return (
            <TudaDiv>
            <ButtonList onClick={this.props.irParaListPlay} >List</ButtonList>
                
                <DivInput>

                    <Input
                        placeholder=" New PlayList"
                        value={this.state.nome}
                        onChange={this.inputNome}
                    />
                    <Button onClick={this.adcPlayList} ><ButtonImg src={seta} /></Button>
                </DivInput>

            <Conteiner>
                <img src={body} />
            </Conteiner>
            
               
                
                
            </TudaDiv>
        )
    }
}