/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import axios from "axios";
import styled from 'styled-components'
import seta from './img/seta.png'
import tedio from './img/tedio.png'
const H1 = styled.h1 ` 
  display: flex;
  justify-content: center;
  color: saddlebrown;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const Conteiner = styled.div `
background-color:rosybrown;
height: 100vh;
`
const Img = styled.img ` 
width: 70px;
margin-left: 10px;
`
const Img2 = styled.img ` 
  width:120px;
  display: block;
  margin: auto;
`
const H3 = styled.h3 ` 
  display: flex;
  justify-content: center;
  font-family: monospace;
  color: purple;
`
const Button = styled.button ` 
  display: block;
  margin: auto;
  border: none;
  padding: 5px;
  background-color:aqua;
  cursor:pointer;
  font-family:Georgia, 'Times New Roman', Times, serif;
  :hover{
    background-color: whitesmoke;
  }
`

const H2 = styled.h2 ` 
  display: flex;
  justify-content: center;
  color: gray;
  margin-top: 5px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const Paragrafo = styled.p ` 
  display: flex;
  justify-content:center;
  color: blueviolet;
`

export default class App extends React.Component {
  state = {
    Atividade: {}
  }

  getAtvidade = () => {
    axios
      .get("https://www.boredapi.com/api/activity/")
      .then((res) => {
        console.log(res.data);
        this.setState({Atividade: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const {activity, type, participants, price } = this.state.Atividade
    return (
      
      <Conteiner>
        <H1>Are you bored? And don't know what to do? <Img src={tedio} /> </H1>
        

        <H2>
          I have the perfect solution!
        </H2>

        <H3>
          Press the button below and get out of boredom
        </H3>

        <Img2 src={seta} alt="Seta para baixo"></Img2>

        <Button onClick={this.getAtvidade}>CLIQUE AQUI</Button>
        <H2>TO GET OUT OF BOREDOM YOU CAN DO:</H2>
        <Paragrafo>ACTIVITY: {activity} </Paragrafo>
        <Paragrafo>TYPE: {type}</Paragrafo>
        <Paragrafo>PARTICIPANTS: {participants} </Paragrafo>
        <Paragrafo>PRICE: ${price} </Paragrafo>

        <H2>Did you find something cool?</H2>

      </Conteiner>
    );
  }
}

