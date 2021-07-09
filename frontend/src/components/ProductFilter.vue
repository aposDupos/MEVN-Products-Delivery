<template>
  <div class="filters main-mt">
    <vs-row justify="center">
      <vs-col w="10" sm="11">
        <h3>Все товары ({{products.length}})</h3>
        <div class="filters-container">
          <div class="filter">
            <slot></slot>
          </div>
          <div class="filter">
              <vs-select
                  dark
                  v-model="sortType"
                  label="Сортировать"
                  id="sort"
              >
                <vs-option
                    label="По возрастанию"
                    value="up"
                >
                  По возрастанию
                </vs-option>
                <vs-option
                    label="По убыванию"
                    value="down"
                >
                  По убыванию
                </vs-option>
              </vs-select>
          </div>
        </div>

      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "ProductFilter",
  data() {
    return {
      sortType: '',
    }
  },
  props: {
    types: Array
  },
  computed:{
    ...mapGetters({
      products: "products"
    })
  }
}
</script>

<style scoped lang="scss">
.filters {

}

.filters {
  &-container {
    display: flex;
    margin-top: 32px;
    column-gap: 24px;
    row-gap: 32px;
    flex-wrap: wrap;
  }
}
</style>