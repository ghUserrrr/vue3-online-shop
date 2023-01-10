<template>
  <header class="header flex">
    <ul class="header__nav header-nav flex mr-auto">
      <li class="header__item header-nav__item">
        <a class="header-nav__link" href="#">NEW IN</a>
      </li>
      <li class="header__item header-nav__item">
        <a class="header-nav__link" href="#">APPAREL</a>
      </li>
    </ul>
    <a class="header__logo-link" href="/">
      <img class="header__logo" src="../assets/images/logo.png" alt=""/>
    </a>
    <ul class="header__nav header-nav flex ml-auto">
      <li class="header-nav__item">
        <a class="header-nav__link" href="#">SEARCH</a>
      </li>
      <li @click="toggleCart" class="header-nav__item">
        <a class="header-nav__link" href="#"
        >CART {{ this.productStore.itemsInCart }}</a
        >
      </li>
    </ul>
  </header>
  <MyCart v-if="isCartOpen" v-on:closeCart="closeCart()"/>
</template>

<script>
import MyCart from "./MyCart.vue";
import {useProductStore} from "@/store/productStore";

export default {
  name: "MyHeaderVue",
  components: {MyCart},

  data() {
    return {
      isCartOpen: false,
    };
  },

  setup() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },

  methods: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    closeCart() {
      this.isCartOpen = false;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/vars";

.header {
  position: relative;
  align-items: center;

  height: 87px;
}

// .header__nav {
// }

.header-nav__item {
  &:not(:last-child) {
    margin-right: 20px;
  }
}

.header-nav__link {
  font-family: "work-sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  text-transform: uppercase;

  color: $main-font-color;
}

// .header__logo {
// }

.header__logo-link {
  position: absolute;
  left: calc(50% - 55px);

  width: 110px;
}
</style>
