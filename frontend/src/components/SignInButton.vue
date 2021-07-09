<template>
  <vs-button
      class="header-sign-in br-16"
      :class="{'btn': width>900, 'btn__icon': width<=900}"
      warn
      shadow
      icon

  >
    <div class="button" v-if="width>900">Вход</div>
    <i class='bx bx-user' v-else></i>
  </vs-button>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "SignInButton",
  props:{},
  data(){
    return{
      content: 1,
    }
  },
  computed:{
    ...mapGetters({
      width: 'width'
    })
  }
}
</script>

<style scoped>

</style>