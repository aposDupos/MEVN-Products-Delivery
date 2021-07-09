import {request} from "./generic.service";

const getType = async (id) => await request({url: `types/${id}`, method: 'get'})
const getTypes = async () => await request({url: `types`, method: 'get'})

export {
    getType,
    getTypes
}