import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { goToFeed, goToLogin} from "../../routes/coodinator"
import {useHistory} from "react-router-dom"
import { HeaderFlex } from './styled'

const Header = () => {
    const history = useHistory()



    return (
        <AppBar position="static">
            <HeaderFlex>
                <Button onClick={() => goToFeed(history)} color="inherit">LABEDDIT</Button>
                <Button onClick={() => goToLogin(history)} color="inherit">login</Button>
            </HeaderFlex>

        </AppBar>
    )
}

export default Header