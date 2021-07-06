import React from 'react'
import axios from 'axios'
import seta from '../img/botao.png'
import styled from 'styled-components'
import lixeira from '../img/lixeira.png'

const ButtonImg = styled.img` 
    width: 20px;
    object-fit: cover;
    display: block;

`
const Conteiner = styled.div ` 

    display: block;

    width: 500px;
    margin: auto;
    text-align: center;
    -webkit-box-shadow: 0px 2px 8px -2px rgba(34, 34, 34, 0.4);
    -moz-box-shadow: 0px 2px 8px -2px rgba(34, 34, 34, 0.4);
    box-shadow: 0px 5px 8px -2px rgba(34, 34, 34, 0.4);
    background-color: 	#8B795E;
    
`
const ImageButton = styled.img ` 
    width:20px;
`
const TudoDiv = styled.div ` 
    font-family: 'Roboto Mono';
    color:#FFEFDB;
    
`

const Button = styled.button `
    margin-top: 5px;
    border: none;
    background-color: transparent;
    cursor:pointer;
`
const ButtonVoltar = styled.button `
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
    margin-right: 5px;
    text-align: center;

`
const Div = styled.div `
    display: flex;
    justify-content: center;
`
const Background =styled.div `  

    background-color: black;
   
` 


export default class MusicaArtista extends React.Component {

    state = {
        music: "",
        artist: "",
        url:"" ,
        musicas: []
    }

    inputMusica = (e) => {
        this.setState({music: e.target.value})
    }

    inputArtista = (e) => {
        this.setState({artist: e.target.value})
    }

    inputUrl = (e) => {
        this.setState({url: e.target.value})
    }

    componentDidMount () {
        this.verMusicas()
    }

    verMusicas = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListId}/tracks`
        axios.get(url, {
            headers: {
                Authorization: "elaini-coelho-molina"
            }
        }).then((res) => {
            this.setState({musicas: res.data.result.tracks})
            console.log(res.data.result.tracks)
        
        })
        .catch((err) => {
            alert("Error: " + err.message)
        })
    }

    adcMusica = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListId}/tracks`
        const body = {
            name: this.state.music,
            artist: this.state.artist,
            url: this.state.url
        }

        axios.post(url,body, {
            headers: {
                Authorization: "elaini-coelho-molina"
            }
        }).then((res) => {
            alert("Musica adicionada!")
            this.verMusicas()
            this.setState({ music: "",
            artist: "",
            url:""})
        }).catch((err) => {
            alert("ERROR")
        })

    }
    deleteMusica = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListId}/tracks/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "elaini-coelho-molina"
            }
        })
        .then((res) => {
            this.verMusicas(id)
            this.setState({})
        })
        .catch((err) => {
            alert("Erro")
        })
    }

    getEmbledUrl = (url) => {
        const urlQuebrada = url.split('watch?v=')
        const videoId = urlQuebrada[1]
        const youtube = 'https://youtube.com/embed/'
        return youtube + videoId
    }


        render() {

            const MusicasNaLista = this.state.musicas.map((lista) => {
                return(

                <div key={lista.id} >
                    <Conteiner>
                            
                        <h2>{lista.artist}</h2>
                        <h3>{lista.name}</h3>
                        <Button onClick={() => this.deleteMusica(lista.id)} ><ImageButton src={lixeira} /></Button> 

                        <iframe width="100%" height="300" 
                        src={this.getEmbledUrl(lista.url)} title="YouTube video player" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>                        
                        
                    </Conteiner>
                </div>
                )
            })

            return(
                <Background>
                    <ButtonVoltar onClick={this.props.irParaListPlay} >Voltar</ButtonVoltar>
               
                    <Div>
                        <Input
                        placeholder="MUSIC"
                        value={this.state.music}
                        onChange={this.inputMusica}
                        />

                        <Input
                        placeholder="ARTIST"
                        value={this.state.artist}
                        onChange={this.inputArtista}
                        />

                        <Input
                        placeholder="URL"
                        type="url"
                        value={this.state.url}
                        onChange={this.inputUrl}
                        />
                        <button onClick={this.adcMusica} ><ButtonImg src={seta}/></button>
                    </Div>

                    <TudoDiv>
                        {MusicasNaLista}
                    </TudoDiv>

                    
                </Background>
            )
        }

}