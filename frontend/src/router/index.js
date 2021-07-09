import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "/",
        component: () => import(/* webpackChunkName: "Home"*/ '../views/Home')
    },
    {
        path: "/home",
        name: "home",
        component: () => import(/* webpackChunkName: "Home"*/ '../views/Home')
    },
    {
        path: "/cart",
        name: "cart",
        component: () => import(/* webpackChunkName: "Home"*/ '../views/Cart')
    },
    {
        path: "/product/:id",
        name: "product",
        component: () => import(/* webpackChunkName: "Card"*/ '../views/Card'),
        props: true
    },
    {
        path: "/about",
        name: "about",
        component: () => import(/* webpackChunkName: "Card"*/ '../views/AboutUs')
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})

export default router