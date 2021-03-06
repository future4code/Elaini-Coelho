import React from 'react';
import useForm from '../../hooks/UseForm'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { login } from '../../services/user'
import { useHistory } from 'react-router-dom';


const LoginForm = () => {
    const [form, onChange, clear ] = useForm({email: "", password:""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history)
    }


    return(
        <div>
            <form onSubmit={onSubmitForm}>
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
                    Entrar
                    
                </Button>
            </form>
        </div>
    )
}

export default LoginForm;