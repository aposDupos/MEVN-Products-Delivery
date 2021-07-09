<template>
  <div class="card br-32">
    <div class="card-image">
      <vs-avatar
          :size="size"
          color="#ffffff"
          class="card-image__avatar br-32"
          @click="routingToProductPage"
      >
        <img :src="product.image"
             :alt="product.title">

      </vs-avatar>

      <vs-button
          class="card-image__like br-16"
          icon
          color="danger"
          border
          :active="active === 2"
          @click="active = 2"
      >
        <i class='bx bxs-heart'></i>
      </vs-button>
    </div>
    <div class="card-content">
      <vs-row justify="center" class="card-header">
        <vs-col w="9" class="card-header__item">{{ product.title }}</vs-col>
        <vs-col w="3" class="card-header__item">{{ product.weight }} кг</vs-col>
      </vs-row>
      <div class="card-description">{{ product.description }}</div>
      <div class="card-footer">
        <div class="card-footer__left">
          <div class="card-price">
            <div class="card-price-new">
              <div class="card-price-new__price">
                <div class="card-price-new__price-text"></div>
                <div class="card-price-new__price-badge br-16"></div>
              </div>
              <div class="card-price-new-sale"></div>
            </div>
            <div class="card-price-old">{{ product.price }} руб/шт</div>
          </div>
          <div class="card-rating">
            <div class="card-rating__item" v-for="i in 5" :key="i"><img :src="require('../assets/rate.svg')"
                                                                        :alt="'Рейтинг'"></div>
          </div>
        </div>
        <vs-button
            class="card-footer__right btn"
            danger
            gradient
            @click="addToCart(product)"
        >
          Купить
          <template #animate>
            <i class='bx bx-plus'></i>
          </template>
        </vs-button>

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object
    }
  },
  data() {
    return {
      active: -1
    }
  },
  mounted() {
  },
  computed: {
    ...mapGetters({
      width: 'width'
    }),
    size() {
      if (this.width > 930) {
        return '356'
      }
      if (this.width > 360) {
        return '324'
      }
      return '250'
    }
  },
  methods: {
    ...mapMutations({
      addToCart: 'addToCart'
    }),
    handleResize() {
      this.width = window.innerWidth;
    },
    routingToProductPage() {
      this.$router.push({
        name: "product",
        params: {id: this.product['_id']}
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>