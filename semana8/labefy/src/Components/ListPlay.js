import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import lixeira from '../img/lixeira.png'


const ImageButton = styled.img ` 
    width:25px;
  
`

const Button = styled.button `
    margin-top: 5px;
    border: none;
    background-color: transparent;
    cursor:pointer;
`

const ConteinerList = styled.div ` 
    display: flex;
    margin-left: 50px;
    margin-top: 50px;
    flex-direction: column;

`

const Nome = styled.h2 ` 
    display: flex;
    justify-content:center;
    color: orangered;
    font-family: 'Roboto Mono';
`

const Juntinhos = styled.ul `
    display: flex;
    justify-content: center;
    -webkit-box-shadow: 0px 2px 8px -2px rgba(34, 34, 34, 0.4);
    -moz-box-shadow: 0px 2px 8px -2px rgba(34, 34, 34, 0.4);
    box-shadow: 0px 5px 8px -2px rgba(34, 34, 34, 0.4);
    padding: 0.7rem 0.9rem;
    min-height: 8rem;
    background-color: #CFCFCF;
    margin: 15px;
`

const Button2 = styled.button `
    background-color: transparent;
    border:none;
    cursor:pointer;
    font-family: 'Roboto Mono';
    font-size: 24px;
    :hover{
        color:	#FF4500;
    }
`
const ButtonHome = styled.button `
    border: none;
    cursor: pointer;
    font-family: 'Roboto Mono';
    margin: 5px 0 0 10px;
    :hover{
        color:	#FF4500;
    }
`

const Background = styled.div `
    background-color: black;   

`
export default class ListPlayer extends React.Component {

    state = {
        logins: []
    }



    componentDidMount() {
        this.listPlayList()
    }

    listPlayList = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';
            axios.get(url, {
                headers: {
                    Authorization: "elaini-coelho-molina"
                }
            })
            .then((res) => {
                this.setState({logins: res.data.result.list})
                console.log(res.data.result.list)
            
            })
            .catch((err) => {
                alert("Error: " + err.message)
            })
    }

    deletePlayList = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "elaini-coelho-molina"
            }
        })
        .then((res) => {
            this.listPlayList(id)
        })
        .catch((err) => {
            alert("Erro")
        })
    }

    render () {

        const QuantidadeLista = this.state.logins.map((list) => {
            return (
                <ConteinerList key={list.id}>
                    
                   <Juntinhos>
                       
                       <Button2 onClick={() => this.props.irParaEditList(list.id)}>{list.name}</Button2>
                        <Button onClick={() => this.deletePlayList(list.id)} ><ImageButton src={lixeira} /></Button>
                    
                    </Juntinhos> 

                    
                
                </ConteinerList>
            )
        });

        return (
            <Background>

                <ButtonHome onClick={this.props.irParaPlay} >Voltar</ButtonHome>
               
                <Nome>PlayLists</Nome> 

                
            {QuantidadeLista}

            </Background>
            
        )
    }
}