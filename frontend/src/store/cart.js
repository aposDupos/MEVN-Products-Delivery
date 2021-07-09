import {sum} from 'ramda'

const mutations = {
    addToCart(state, product) {
        const productInCart = state.cartItems.find(({_id}) => product._id === _id)
        state.cart.total += 1
        if (productInCart) {
            const productInCartIndex = state.cartItems.findIndex(({_id}) => product._id === _id)
            state.cartItems[productInCartIndex].total += 1
            // const currentProductsInCart = state.cartItems
            // state.cartItems = currentProductsInCart.filter(
            //     ({_id}) => product._id !== _id,
            // )
        } else {
            state.cartItems.push(product)
            state.cartItems[state.cartItems.length - 1].total = 1
        }
    },
    clearCart(state) {
        state.cartItems = []
    },
    updateItemTotal(state, cartItem) {
        const newTotal = cartItem.total
        const oldTotal = state.cartItems[cartItem.key].total
        state.cart.total += newTotal - oldTotal
        state.cartItems[cartItem.key].total = newTotal
    },
    deleteCartItem(state, index) {
        state.cart.total -= state.cartItems[index].total
        state.cartItems.splice(index, 1)
    }
}

const actions = {}

const getters = {
    cartTotalPrice: ({cartItems}) => sum(cartItems.map(item => item.price)),
    cartCount: ({cartItems}) => cartItems.length,
    cart: ({cart}) => cart.total,
    cartItems: ({cartItems}) => cartItems,
}

const state = () => ({
    cart: {
        total: 0,
    },
    cartItems: [],
})

export default {
    mutations,
    actions,
    getters,
    state,
}
