import React from 'react';
import useForm from '../../hooks/UseForm'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { cadastro } from '../../services/user'
import { useHistory } from 'react-router-dom';
const CadastroForm = () => {
    const history = useHistory()
    const [form, onChange, clear ] = useForm({username: "", email: "", password:""})
    
    const onSubmitForm = (event) => {
        event.preventDefault()
        cadastro(form,clear, history)
    }

    return(
        <div>
            


            <form onSubmit={onSubmitForm}> 
            
                <TextField
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                />
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                    
                />

                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    type={"password"}
                    required
                />

                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    Fazer Cadastro
                    
                </Button>
            </form>
        </div>
    )
}

export default CadastroForm;