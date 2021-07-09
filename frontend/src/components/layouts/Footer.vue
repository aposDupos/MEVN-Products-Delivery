<template>
  <footer class="footer">
    <div class="footer-content">
      <vs-row justify="center">
        <vs-col w="10" sm="11">
          <div class="footer-top">
            <div class="footer-logo-and-time">
              <router-link to="/" class="footer-logo">
                <vs-avatar color="#FFDE22" size="96" class="footer-logo__img br-16">
                  <img src="../../assets/logo.svg" alt="Лимонад">
                </vs-avatar>
                <h1 class="footer-logo__text">Лимонад</h1>
              </router-link>
              <h2 class="footer-time">Работаем с 8:00 до 23:00</h2>
            </div>
            <div class="footer-socials">
              <vs-button
                  icon
                  blank
                  transparent
                  class="footer-socials__item btn__social"
                  v-for="(item, key) in socials"
                  :key="key"
                  :href="item.link"
              >
                <i class='bx br-16' :class="item.icon"></i>
              </vs-button>
            </div>
            <hr class="footer-hr">
          </div>

          <div>
            <vs-row>
              <vs-col type="flex" sm="12" w="6" class="footer-bottom">
                <router-link
                    class="footer-bottom__item"
                    v-for="(item, key) in footerLinks"
                    :key="key"
                    :to="item.link"
                >{{ item.name }}
                </router-link>
              </vs-col>
            </vs-row>
          </div>
        </vs-col>
      </vs-row>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      socials: [
        {
          icon: "bxl-telegram",
          link: '#'
        },
        {
          icon: "bxl-vk",
          link: '#'
        },
        {
          icon: "bxl-instagram",
          link: '#'
        }
      ],
      footerLinks: [
        {
          name: "Доставка",
          link: "#"
        },
        {
          name: "Политика конфиденциальности",
          link: "#"
        },
        {
          name: "О нас",
          link: "/about"
        },
        {
          name: "Лицензионное соглашение",
          link: "#"
        },
      ]
    }
  },
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/colors";

.footer {
  * {
    color: #FFFFFF;
  }

  margin-top: 220px;

  @media screen and (max-width: 768px) {
    margin-top: 110px;
  }
  @media screen and (max-width: 360px) {
    margin-top: 64px;
  }
  background: url("../../assets/footer.png") no-repeat;
  padding-top: 158px;

  &-content {
    background: $violet;
    padding-top: 48px;
  }

  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  &-footer-logo-and-time {

  }

  &-logo {
    display: flex;
    align-items: flex-end;


    &__img {
      margin-right: 16px;
      @media screen and (max-width: 900px) {
        display: none;
      }

      img {
        width: 48px;
      }
    }

    &__text {

    }
  }

  &-time {
    margin-top: 8px;
  }

  &-socials {
    display: flex;
    gap: 20px;
    @media screen and (max-width: 768px) {
      order: 1;
    }
  }

  &-hr {
    width: 100%;
    margin-top: 16px;
    height: 0;
    padding: 0;
    border: none;
    border-top: 5px solid #FFFFFF;
  }

  &-bottom {
    margin: 32px 0 64px;
    display: flex;
    flex-wrap: wrap;
    gap: 22px 37px;

    &__item {
      border-bottom: 2px solid #FFFFFF;
    }
  }
}
</style>