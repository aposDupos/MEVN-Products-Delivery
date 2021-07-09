<template>
  <div class="">
    <Header/>
    <div class="product">
      <vs-row justify="center">
        <vs-col w="10" sm="11" type="flex">
          <div class="product-container">
            <div class="product-image">
              <vs-avatar class="product-image br-32" :size="size" warn>
                <img :src="product.image"
                     :alt="product.title">
              </vs-avatar>
            </div>


            <div class="product-content">
              <h2 class="product-content__heading">{{ product.title }}</h2>
              <div class="product-content__weight">{{ product.weight }} кг</div>
              <hr class="product-content__hr"/>
              <div class="product-content__description">
                <div class="product-content__description-heading">Описание</div>
                <p class="product-content__description-text">{{ product.description }}</p>
              </div>
              <div class="product-content__footer">
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
                </div>
                <vs-button
                    class="product-footer__right btn"
                    danger
                    gradient
                >
                  Купить
                  <template #animate>
                    <i class='bx bx-plus'></i>
                  </template>
                </vs-button>

              </div>
              <div class="product-content__price"></div>
            </div>
          </div>
        </vs-col>
      </vs-row>
    </div>
    <Footer/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

export default {
  name: "Card",
  components: {
    Header, Footer
  },
  data() {
    return {
      active: -1
    }
  },
  props: {
    id: {
      type: String,
      default: '0'
    }
  },
  mounted() {
    this.fetchProduct(this.id)
  },
  computed: {
    ...mapGetters({
      product: 'product',
      width: 'width'
    }),
    size() {
      const width = this.width
      if (width > 1024) {
        return '448'
      }
      if (width > 900) {
        return '400'
      }
      if (width > 768) {
        return '360'
      }else {
        return '256'
      }
    }
  },

  methods: {
    ...mapActions({
      fetchProduct: 'fetchProduct'
    })
  }

}
</script>

<style scoped lang="scss">
@import "../assets/styles/colors";
</style>