import axios from "axios"

const API_URL = 'http://product-delivery-api.std-1384.ist.mospolytech.ru/api/api/v1'

export const request = async ({url, method, data = {}}) => {
    const response = await axios[method](`${API_URL}/${url}`, data)
    return response.data
}