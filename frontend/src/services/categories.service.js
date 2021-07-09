import {request} from "./generic.service";

const getCategory = async (id) => await request({url: `categories/${id}`, method: 'get'})
const getCategories = async () => await request({url: `categories`, method: 'get'})

export {
    getCategory,
    getCategories
}