<template>

  <div class="cart-container-item br-32">

    <div
        class="cart-item br-32"
    >

      <div class="cart-item__buttons">
        <vs-button
            icon
            shadow
            @click="active=!active"
        >
          <i class='bx bx-dots-horizontal-rounded'></i>
        </vs-button>
        <vs-button
            icon
            shadow
            @click="deleteCartItem(index)"
        >
          <i class='bx bx-x'></i>
        </vs-button>
      </div>
      <vs-dialog
          overflow-hidden
          not-close
          v-model="active">
        <template #header>
          <h3 class="not-margin">
            {{ item.title }}
          </h3>
        </template>
        <div class="dialog-content">
          <div class="dialog-content__weight">
            <b>Вес: </b>
            {{ item.weight }}
          </div>
          <div class="dialog-content__description">
            <b>Описание: </b>
            {{ item.description }}
          </div>
          <div class="dialog-content__price">
            <b>Цена: </b>
            {{ item.price }}
          </div>
          <div class="dialog-content__bzu" v-if="item.bzu">
            <b>БЖУ: </b>
            {{ item.bzu }}
          </div>
        </div>
      </vs-dialog>


      <vs-avatar
          class="cart-item__image br-32"
          :size="size"
          warn
      >

        <img
            :src="item.image"
            :alt="item.title"
        >
      </vs-avatar>
      <div class="cart-item__text">
        <div class="cart-item__text-header">
          <div class="cart-item__text-heading">{{ item.title }}</div>
          <div class="cart-item__text-weight">{{ item.weight }} кг</div>
        </div>
        <div class="cart-item__text-price">{{ item.price }} руб/шт</div>
      </div>
      <div class="cart-counter br-16">
        <vs-button
            icon
            transparent
            @click="changeTotal(-1)"
        >
          <i class='bx bx-minus'></i>
        </vs-button>

        <!--<vs-input v-model="cartItemCounter" type="number"></vs-input>-->
        <div class="cart-counter__number">
          <label for="cart-item-counter" class="cart-counter__number-labe;">
            <input id="cart-item-counter" type="text" v-model="cartItemCounter">
          </label>
        </div>

        <vs-button
            icon
            transparent
            @click="changeTotal(1)"
        >
          <i class='bx bx-plus'></i>
        </vs-button>
      </div>
    </div>


  </div>
</template>

<script>
import {mapGetters, mapState, mapMutations} from 'vuex'

export default {
  name: "CartItem",
  data() {
    return {
      active: false,
    }
  },
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  computed: {
    ...mapGetters({
      width: 'width',
    }),
    ...mapState({
      cartItems: state => state.cart.cartItems
    }),


    size() {
      return this.width > 768 ? '128' : '192'
    },
    cartItemCounter: {
      get() {
        return this.cartItems[this.index].total || 0
      },
      set(value) {
        this.updateItemTotal({
          key: this.index,
          total: value
        })
      }
    }
  },
  methods: {
    ...mapMutations({
      updateItemTotal: 'updateItemTotal',
      deleteCartItem:'deleteCartItem'
    }),
    changeTotal(action) {
      this.updateItemTotal({
        key: this.index,
        total: this.cartItems[this.index].total + action
      })
    },
    // deleteCartItem(){
    //
    // }
  }
}
</script>

<style scoped>

</style>