<template>
  <div class="header-cart">
    <vs-button
        class="br-16 btn__icon"

        to="/cart"
        icon
        floating
        dark
        animation-type="rotate"
    >
      <i class='bx bx-cart'></i>
      <template #animate>
        <i class='bx bxs-cart'></i>
      </template>
    </vs-button>
    <div class="round">{{ cart }}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "CartButton",
  computed: {
    ...mapGetters({
      cartCount: 'cartCount',
      cart: 'cart'
    }),

  }
}
</script>

<style scoped>

</style>