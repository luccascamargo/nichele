import axios from 'axios'

export const api = axios.create({
    baseUrl: process.env.APP_URL
})
