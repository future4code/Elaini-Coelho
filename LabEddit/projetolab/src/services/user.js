import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import {goToFeed} from '../routes/coodinator'

export const login = (body, clear,history) => {
    axios.post(` ${BASE_URL}/users/login`, body, {
        "headers": {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(history)
    }).catch((err) => {
        alert(err + 'Erro no login')
    })
}

export const cadastro = (body, clear,history) => {
    axios.post(` ${BASE_URL}/users/signup`, body, {
        "headers": {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(history)
    }).catch((err) => {
        alert(err + 'Erro no login')
    })
}