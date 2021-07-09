<template>
  <header class="header info-header">
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
        <nav class="nav">
          <router-link
              class="nav__item"
              v-for="(item, key) in navLinks"
              :key="key"
              :to="item.to"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <vs-button
            class="header-sidebar__button btn__icon"
            @click="activeSidebar = !activeSidebar"
            icon
            shadow
            floating
        >
          <i class='bx bx-menu' style="color: black"></i>
        </vs-button>
        <div class="header-buttons">
          <cart-button/>
        </div>

      </vs-col>
    </vs-row>
    <vs-sidebar
        class="header-sidebar header-info-sidebar br-0"
        :open.sync="activeSidebar"
        right
        v-model="isSidebarItemActive"
        dark
    >
      <template #logo>
        <h1 class="header-logo__text">Лимонад</h1>
      </template>
      <vs-sidebar-item
          v-for="(sidebarItem, key) in navLinks"
          :key="key"
          :id="sidebarItem.routeName"
          class="header-info-sidebar__item"
          :to="sidebarItem.to"
          dark
      >
        {{ sidebarItem.name }}
      </vs-sidebar-item>
      <vs-sidebar-item id="Cart" dark class="header-info-sidebar__item" to="/cart">
        <template #icon>
          <i class='bx bx-cart' style="color:#000000;"></i>
        </template>
        Корзина
      </vs-sidebar-item>

    </vs-sidebar>
  </header>
</template>

<script>
import {mapGetters} from 'vuex'
import CartButton from "../CartButton";
import router from "../../router";

export default {
  name: "Header",
  components: {
    CartButton
  },
  data() {
    return {
      activeSidebar: false,
      isSidebarItemActive: '',
      activeNavItem: false,
      navLinks: [
        {
          to: '/',
          name: 'Главная',
          routeName: '/'
        },
        {
          to: '/',
          name: 'Доставка',
          routeName: 'delivery'
        },
        {
          to: '/about',
          name: 'О нас',
          routeName: 'about'
        }
      ],
      // sidebarItems:[
      //   {
      //     name:'Главная',
      //     to: '/'
      //   },
      //   {
      //     name:'Доставка',
      //     to: '/'
      //   },
      //   {
      //     name:'О нас',
      //     to: '/about'
      //   },
      //   {
      //     name:'Корзина',
      //     to: ''
      //   },
      //   {
      //     name:'',
      //     to: ''
      //   },
      // ]
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
  methods: {},
}
</script>

<style lang="scss" scoped>


</style>