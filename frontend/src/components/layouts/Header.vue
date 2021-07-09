<template>
  <header class="header">
    <vs-row justify="center">
      <vs-col justify="space-between" style="align-items: center" type="flex" class="header-container" w="10" sm="11">
        <router-link to="/" class="header-logo">
          <vs-avatar color="#FFDE22" size="64" class="header-logo__img" v-if="this.width>360">
            <img src="../../assets/logo.svg" alt="Лимонад">
          </vs-avatar>
          <vs-avatar color="#FFDE22" size="32" class="header-logo__img" v-else>
            <img src="../../assets/logo.svg" alt="Лимонад">
          </vs-avatar>
          <h1 class="header-logo__text">Лимонад</h1>
        </router-link>

        <vs-col w="4" xs="11" class="header-search-container" style="margin: 0 auto;">
          <vs-input
              class="header-search br-16"
              label-placeholder="Поиск"
              v-model="search"
              icon-after
              shadow
              block
              type="text"
          >
            <template #icon>
              <i class='bx bx-search'></i>
            </template>
          </vs-input>
        </vs-col>

        <vs-button
            class="header-sidebar__button btn__icon"
            @click="activeSidebar = !activeSidebar"

            icon
            shadow
            floating
        >
          <i class='bx bx-menu'></i>
        </vs-button>
        <div class="header-buttons">
          <sign-in-button :width="width"/>
          <cart-button/>
        </div>
      </vs-col>
    </vs-row>
    <vs-sidebar
        class="header-sidebar br-32"
        :open.sync="activeSidebar"
        right
        v-model="isSidebarItemActive"
        dark
    >
      <template #logo>
        <h1 class="header-logo__text">Лимонад</h1>
      </template>
      <vs-sidebar-item id="/" class="header-sidebar__item button" to="/">
        <template #icon>
          <i class='bx bx-home'></i>
        </template>
        Главная
      </vs-sidebar-item>
      <vs-sidebar-item id="cart" dark class="header-sidebar__item button" to="/cart">
        <template #icon>
          <i class='bx bx-cart' style="color:#000000;"></i>
        </template>
        Корзина
      </vs-sidebar-item>
      <vs-sidebar-item id="account" class="header-sidebar__item button">
        <template #icon>
          <i class='bx bx-user'></i>
        </template>
        Аккаунт
      </vs-sidebar-item>
    </vs-sidebar>
  </header>
</template>

<script>
import {mapGetters} from 'vuex'
import SignInButton from "../SignInButton";
import CartButton from "../CartButton";
import router from "../../router";

export default {
  name: "Header",
  components: {
    SignInButton,
    CartButton
  },
  data() {
    return {
      search: '',
      activeSidebar: false,
      isSidebarItemActive: '',
    }
  },
  props: {
    cartCount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters({
      width: "width"
    }),
  },
  mounted() {
    this.isSidebarItemActive = router.currentRoute.name
    if (this.isSidebarItemActive === null) {
      this.isSidebarItemActive = 'Home'
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>


</style>