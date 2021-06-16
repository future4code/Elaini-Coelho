
import axios from "axios"
import React from "react"

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
                <button onClick={this.props.irParaUsuario} >Usuarios</button>
                <h2>Cadastro</h2>

                <input
                placeholder={"Nome"}
                value={this.state.nome}
                onChange={this.inputNome}
                />
                <input
                placeholder={"E-mail"}
                onChange={this.inputEmail}
                value={this.state.email}
                type={"email"}
                />
                <button onClick={this.salvarUser}>Salvar</button>
            </div>
        )
    }
}