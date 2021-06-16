import React from "react"
import axios from "axios"
import styled from 'styled-components'


const Conteiner = styled.div `
    background-color: burlywood;
    padding: 10px;
    display: flex;
    width:  300px;
    justify-content:space-between;
    margin: 0 auto 7px auto;
    
`

const Button = styled.button ` 
    background-color: aliceblue;
    padding: 5px;
    font-size: 14px;
    border: none;
    cursor: hand;
    cursor: pointer;
`
const H2 = styled.h2 ` 
    font-family: Arial, Helvetica, sans-serif;
    color: gray;
    text-align: center;
`
export default class Usuarios extends React.Component {

    state= {
        logins: []
    }

    componentDidMount() {
        this.receberUser()
    }

   receberUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers:{ 
            Authorization: "elaini-coelho-molina"
            }
            
        })
        .then((res) => {
            this.setState({logins: res.data})
        })
        .catch((err) => {
            alert("Erro")
        })
    }


    deleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "elaini-coelho-molina"
            }
        }).then((res) => {
            if(alert("Tem certeza?")) { 
            }
            this.receberUser()
        })
        .catch((err) => {
            alert("Erro")
        })
    }
    render() {

        const ListaUsers = this.state.logins.map((usuario) => {
            return (
                <Conteiner key={usuario.id}>
                     {usuario.name}
                    <Button onClick={() => this.deleteUser(usuario.id)} >×</Button>
                </Conteiner>
            )
        })

        return(
            <div>
                
                <H2>Detalhes</H2>

                {ListaUsers}   

              <Button onClick={this.props.irParaUsuario} >VOLTAR</Button>
            </div>
        )
    }
}