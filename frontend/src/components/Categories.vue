<template>
  <div class="categories main-mt">
    <vs-row justify="center">
      <vs-col w="10" sm="11">
        <h2 class="categories__heading">
          Категории
        </h2>
      </vs-col>
      <vs-col w="10" sm="11" type="flex"  class="categories-container main-mt">
        <router-link v-for="(category, key) in categories" :key="key" to="Home" class="category__caption">
        <div class="category">
          <vs-avatar size="64" class="category__image" :color="category.color">
            <img :src="category.image" :alt="category.description">
          </vs-avatar>
          <span class="category__caption">{{ category.title }}</span>
        </div>
        </router-link>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Categories",
  data() {
    return {}
  },
  mounted() {
    this.fetchCategories()
  },
  methods: {
    ...mapActions({
      fetchCategories: 'fetchCategories',
    })
  },
  computed: {
    ...mapGetters({
      categories: 'categories',
    }),

  }
}
</script>

<style scoped lang="scss">

</style>