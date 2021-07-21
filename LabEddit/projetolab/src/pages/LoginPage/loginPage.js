import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import LoginForm from './loginForm';
import { goToCadastro } from '../../routes/coodinator'
import useUnprotectedPage from '../../hooks/useUnprotectPage'


const LoginPage = () => {
    const history = useHistory()
    useUnprotectedPage()
    return(
        <div>
            <h2>Login</h2>

            <LoginForm/>

            <Button 
            type={"submit"}
            onClick={() => goToCadastro(history)}
            >
                NÃO POSSUI CONTA? CADASTRE-SE
            </Button>

         </div>
    )
}

export default LoginPage;