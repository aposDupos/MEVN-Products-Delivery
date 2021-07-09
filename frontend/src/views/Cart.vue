<template>
  <div class="cart">
    <Header/>

    <vs-row justify="center">
      <vs-col type="flex" w="10" sm="11">
        <div class="cart-header">
          <h2 class="cart-header__heading">Корзина</h2>
          <hr class="cart-header__hr"/>
        </div>
      </vs-col>
      <vs-col type="flex" w="10" sm="11" class="cart-items">
        <div class="cart-container">
      <cart-item  v-for="(item, key) in cartItems"
                  :key="key" :index="key" :item="item"/>
        </div>
      </vs-col>
    </vs-row>
    <Footer/>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import CartItem from "../components/CartItem";
export default {
  name: "Cart",
  components: {
    Header, Footer, CartItem
  },
  data() {
    return {
      active: 0
    }
  },

  computed: {
    ...mapGetters({
      cartItems: 'cartItems'
    }),

  },
  methods: {
    ...mapMutations({})
  }
}
</script>

<style scoped lang="scss">



</style>