import React from 'react'
import logo from '../img/logo.png'
import styled from 'styled-components'
import telainicial from './TelaAdcList'

const ImageLogo = styled.img ` 
width: 55px;
height:60px ;
margin-top: 7px;
margin-left: 25px;
object-fit: cover;
`

const Left = styled.div `
    display: flex;
`
const Name = styled.h2 ` 
    margin-left:7px;
    color: #e86800;
    font-family: 'Roboto Mono';
`
const H3 = styled.h3 ` 
    margin-left: 20px;
    margin-right: 25px;
    color: #e86800;
    font-family: 'Roboto Mono';
      :hover{
        color: black; ;
      }

`

const Paragrafo2 = styled.p `  
    margin-top: 23px;
`

const Rigth = styled.div `
    display: flex;
`

const Conteiner = styled.div `
    display: flex;
    justify-content:space-between;
    background-color:#FFEBCD;
`
export default class Header extends React.Component {
    render() {
        return(
            <Conteiner>
                
                <Left>

                <ImageLogo src={logo} alt="Logo-Labefy"/>
                <Name>LABEFY</Name>
                </Left>

                <Rigth>
                    <H3>PREMIUM</H3>
                    <H3>SUPORTE</H3>

                    <Paragrafo2>|</Paragrafo2>

                    <H3>Inscreva-se </H3>
                    <H3>Entrar</H3>


                </Rigth>

            </Conteiner>

        )
    }
}