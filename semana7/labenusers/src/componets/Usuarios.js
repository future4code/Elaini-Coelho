import React from "react"
import axios from "axios"
import styled from 'styled-components'


const Conteiner = styled.div ` 
    border: 1px solid black;
    padding: 10px;
    display: flex;
    margin: 10px;
    width:  300px;
    justify-content:space-between;
`

const Button = styled.button ` 

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
                    <button onClick={() => this.deleteUser(usuario.id)} >×</button>
                </Conteiner>
            )
        })

        return(
            <div>
                <button onClick={this.props.irParaCadastro} >Cadastro</button>
                <h2>Usuarios</h2>
                {ListaUsers}
            </div>
        )
    }
}