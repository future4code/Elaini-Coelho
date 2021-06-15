import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Usuarios from './componets/Usuarios'
import './App.css';



const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization: "elaini-coelho-molina"
  }
};

const Conteiner = styled.div ` 
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 250px;
  margin: 50px auto;
  padding: 30px;
`

const Button = styled.button ` 
  background: #8B3A3A;
  border: 1px solid #8B3A3A;
  border-radius: 3px;
  color: #FDFDFD;
  font-size: 1rem;
  margin: 10px 0 0 70px;
  padding: 1rem ;
  border:none;
  cursor: pointer;
  width: min-content;
`
const Input = styled.input ` 
width: min-content;
margin-left: 40px;

`

const Label = styled.label ` 

margin-left: 40px;
`

export default class App extends React.Component {

  state = {
    inputNome: "",
    inputEmail: "",
    logins: [],
    mostraUser: false
  };

  mudarInputNome = (e) => {
    this.setState({ inputNome: e.target.value})
  };

  mundarInputEmail = (e) => {
    this.setState({ inputEmail: e.target.value})
  };


  pegarUser = () => {
    axios.get(url,headers).then((res) => {
      console.log(res.data) 
      this.setState({logins: res.data})
    }).catch((err) => {
      console.log(err.res.data.message)
    })
  }


  CriarUser = () => {

    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail

    }
    axios.post(url, body, headers).then((res) => {
      alert("Cadastro realizado!")
      this.setState({inputNome: "",
       inputEmail:""});

      this.pegarUser();

      }).catch((err) => {
        alert(err.res.data.message);
    })
  }

  mostraUsuario = () => {
    this.setState({ mostarUser: !this.state.mostraUser})
  }




  render() {
  return(

    

    <div>

      this.mostraUsuario?this.Usuario():<button onClick={this.mostraUsuario}>Lista Cadastrados</button>
      
      
      <Conteiner>
        <Label>Nome:</Label>
        <Input
          value={this.state.inputNome}
          onChange={this.mudarInputNome}
        />
        <Label>E-mail:</Label>
        <Input
        type="email"
        value={this.state.inputEmail}
        onChange={this.mundarInputEmail}
        />

        <Button onClick={this.CriarUser}>Salvar</Button>
      </Conteiner>
      
    </div>
  )

    
}
}

