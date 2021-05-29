<template>
  <header class="header">
    <div class="header__left">LOGO</div>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-list__item" v-for="({id, title}, key) in categories" :key="key">
          <router-link :to="`category/${id}`">{{title}}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>