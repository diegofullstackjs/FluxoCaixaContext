import axios from 'axios'

export function isauth() {
    if(localStorage.getItem('token') && localStorage.getItem('user'))
    {
        return {
            token: localStorage.getItem('token'),
            user : localStorage.getItem('user')
        }
    }
    return {
        error: "Usuario nao autenticado"
    }
}

export const api = axios.create({
    baseURL: "http://www.acompanhantes.io",
    headers: {
        "Content-Type" : "application/json"
    }
})