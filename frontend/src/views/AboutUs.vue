<template>
  <div class="info-component">
    <info-header/>
    <vs-row justify="center" class="about-us">

      <vs-col w="10" sm="11" type="flex">
        <div class="about-us-main">

          <div class="about-us-main__text" style="display:flex;">
            <div class="about-us-main__text-logo">
            <vs-avatar color="#FFDE22" size="44" class="header-logo__img">
              <img src="../assets/logo.svg" alt="Лимонад">
            </vs-avatar>
            </div>
            <p class="about-us-main__text-paragraph">
              <span class="about-us-main__text-paragraph__yellow">Лимонад</span> - онлайн‑магазин с доставкой за <span class="about-us-main__text-paragraph__yellow about-us-main__text-paragraph__yellow__underline">15 минут.</span> Приносим продукты, товары для дома, косметику и всё
              нужное для комфортного быта. В каждом районе есть свой даркстор, поэтому так быстро. Работаем в 15
              городах. Доставка всегда <span class="about-us-main__text-paragraph__yellow about-us-main__text-paragraph__yellow__underline">бесплатная.</span></p>
          </div>

          <div class="about-us-main__image">
            <img src="../assets/iphone.png" alt="">
          </div>

        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import InfoHeader from "../components/layouts/InfoHeader";

export default {
  name: "AboutUs",
  components: {
    InfoHeader
  }
}
</script>

<style scoped lang="scss">

</style>