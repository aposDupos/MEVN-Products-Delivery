<template>
  <div class="home">
    <!--    :cartCount="this.cartCount"-->
    <Header/>
    <categories/>
    <product-filter :types="types">
      <vs-select
          multiple
          dark
          filter
          collapse-chips
          v-model="filteredTypes"
          label="Тип товара"
          id="type"
      >
        <vs-option
            v-for="(type, key) in types"
            :key="key"
            :label="type.title"
            :value="type.title">
          {{ type.title }}
        </vs-option>
      </vs-select>
    </product-filter>
    <vs-row justify="center">
      <vs-col w="10" sm="11">
        <div class="cards">
          <product-card
              v-for="(product, key) in products"
              :key="key"
              :product="product"
          />
        </div>
      </vs-col>
    </vs-row>

    <Pagination/>
    <Footer/>

  </div>

</template>

<script>
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import {mapGetters, mapActions} from "vuex"
import Header from "../components/layouts/Header";
import ProductFilter from "../components/ProductFilter";
import Footer from "../components/layouts/Footer";
import Pagination from "../components/Pagination";

export default {
  name: "Home",
  data() {
    return {
      filteredTypes: [],

    }
  },
  components: {
    Header,
    Categories,
    ProductFilter,
    ProductCard,
    Footer,
    Pagination

  },
  computed: {
    ...mapGetters({
      products: 'products',
      types: 'types',
      // cartCount: 'cartCount'
    })
  },
  mounted() {

  },
  methods: {
    ...mapActions([
      "fetchProducts", "fetchTypes"
    ]),
    reload() {
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped lang="scss">
.home {

}


</style>