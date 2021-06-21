import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p ` 
    font-family: 'Roboto Mono';
    color: black;
`

const Conteiner = styled.div ` 
    background-color:#FFEBCD;
    display: flex;
    justify-content: center;

`


export default class Footer extends React.Component{
    render() {
        return (
            <Conteiner>

                
                <Paragraph>&copy; DIREITOS RESERVADOS </Paragraph>
            
            </Conteiner>
        )
    }
}