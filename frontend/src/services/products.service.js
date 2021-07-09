import {request} from "./generic.service";

const getProduct = async (id) => await request({url: `products/${id}`, method: 'get'})
const getProducts = async () => await request({url: `products`, method: 'get'})

export {
    getProduct,
    getProducts
}