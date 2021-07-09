import {getType, getTypes} from "../services/types.service";


const getters = {
    type: ({type}) => type,
    types: ({types}) => types,
    typeError: ({typeError}) => typeError,
}

const actions = {
    async fetchType({commit}, id) {
        try {
            const type = await getType(id)
            commit('setType', type)
        } catch (err) {
            commit('setTypeError', err)
        }
    },
    async fetchTypes({commit}) {
        try {
            const types = await getTypes()
            commit('setTypes', types)
        } catch (err) {
            commit('setTypeError', err)
        }
    },
}

const mutations = {
    setType(state, type) {
        state.type = type
    },
    setTypes(state, types) {
        state.types = types
    },
    setTypeError(state, error) {
        state.typeError = error
    }
}

const state = () => ({
    type: {},
    types: [],
    typeError: null
})

export default {
    mutations,
    actions,
    getters,
    state
}