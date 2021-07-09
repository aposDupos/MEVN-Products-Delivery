import Vue from "vue";
import Vuex from "vuex";
import products from "./products";
import categories from "./categories";
import types from "./types";
import common from "./common";
import cart from "./cart";
Vue.use(Vuex);
Vue.config.devtools = true

export default new Vuex.Store({
    state:{},
    modules: {
        products,
        categories,
        types,
        common,
        cart
    },
})