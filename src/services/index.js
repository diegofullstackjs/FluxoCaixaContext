import axios from 'axios'

export function isauth() {
    if(localStorage.getItem('token') && localStorage.getItem('user'))
    {
        return {
            token: localStorage.getItem('token'),
            user : localStorage.getItem('user')
        }
    }
    return false
}

export const api = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
        "Content-Type" : "application/json"
    }
})