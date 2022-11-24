import axios from 'axios';

const urlBE = process.env.BACKEND_HOST;
const url = "https://fazzpay-rose.vercel.app"

export const register = (body) => {
    return axios.post("https://fazzpay-rose.vercel.app/auth/register", body)
}

export const login = (body) => {
    return axios.post(`${url}/auth/login`, body)
}