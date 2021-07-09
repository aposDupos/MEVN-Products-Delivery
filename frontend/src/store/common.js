const getters = {
    width: ({width}) => width
}

const actions = {}

const mutations = {
    setWidth(state, width) {
        state.width = width
    }
}

const state = () => ({
    width:{
        type: String,
        default: window.innerWidth.toString()
    }
})

export default {
    mutations,
    actions,
    getters,
    state
}