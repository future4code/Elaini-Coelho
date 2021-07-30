import React from 'react';
import CadastroForm from './cadastroForm';
import useUnprotectedPage from  '../../hooks/useUnprotectPage'

const CadastroPage = () => {
    useUnprotectedPage()
    return(
        <div>
            <h2>Cadastro</h2>

            <CadastroForm/>

         </div>
    )
}

export default CadastroPage;