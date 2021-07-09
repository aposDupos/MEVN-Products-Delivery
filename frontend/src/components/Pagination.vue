<template>
  <div class="pagination">
    <div class="pagination__button">
      <vs-button class="pagination__button__item">
        Загрузить еще...
      </vs-button>
    </div>

    <vs-pagination
        class="pagination__pages"
        v-model="page"
        :length="20"
        dark
        :not-arrows="width < 400"
    />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Pagination",
  data() {
    return {
      page: 1
    }
  },
  computed: {
    ...mapGetters({
      width: 'width'
    })
  }
}
</script>

<style scoped>

</style>