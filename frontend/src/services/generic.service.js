import axios from "axios"

const API_URL = 'http://localhost:3000/api/v1'

export const request = async ({url, method, data = {}}) => {
    return await axios[method](`${API_URL}/${url}`, data)
}