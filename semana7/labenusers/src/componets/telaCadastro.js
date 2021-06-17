
import axios from "axios"
import React from "react"
import styled from "styled-components"


const H2 = styled.h2 ` 
    font-family: Arial, Helvetica, sans-serif;
    color: gray;
    text-align: center;
`
const Input = styled.input ` 
    background-color: burlywood;
    border: none;
    display: block;
    padding: 5px;
    align-items: center;
    margin: 0 auto 7px auto;
`
const Button2 = styled.button ` 
    background-color: aliceblue;
    padding: 5px;
    font-size: 14px;
    border: none;
    cursor: hand;
    cursor: pointer;
    display: block;
    margin: auto;
`

const Button = styled.button ` 
    background-color: aliceblue;
    padding: 5px;
    font-size: 14px;
    border: none;
    cursor: hand;
    cursor: pointer;
`
export default class TelaCadastro extends React.Component {
    
    state={
        nome: "",
        email:""
    }
    
    inputNome = (e) => {
        this.setState({nome: e.target.value})
    }

    inputEmail = (e) => {
        this.setState({email: e.target.value})
    }
    
    salvarUser = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body= {
            name:this.state.nome,
            email: this.state.email
        }
        axios.post(url,body, {
            headers: {
                Authorization: "elaini-coelho-molina"
            }
        }).then((res) => {
            alert("Cadastro Realizado")
            this.setState({nome:"", email:""})
        }).catch((err) => {
             alert(err.response.data.message)
        })
    
    }
    
    
    render() {
        return(
            <div>
                <Button onClick={this.props.irParaUsuario} >LISTA</Button>
                <H2>Cadastro</H2>

                <Input
                placeholder={"Nome"}
                value={this.state.nome}
                onChange={this.inputNome}
                />
                
                <Input
                placeholder={"E-mail"}
                onChange={this.inputEmail}
                value={this.state.email}
                type={"email"}
                />
                
                <Button2 onClick={this.salvarUser}>Salvar</Button2>
            </div>
        )
    }
}