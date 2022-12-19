<template>
  <header class="header flex">
    <ul class="header__nav header-nav flex mr-auto">
      <li class="header__item header-nav__item">
        <a class="header-nav__link" href="#">NEW IN</a>
      </li>
      <li class="header__item header-nav__item">
        <a class="header-nav__link" href="#">APPAREL</a>
      </li>
      <li class="header__item header-nav__item">
        <a class="header-nav__link" href="#">PLUS SIZE</a>
      </li>
      <li class="header__item header-nav__item">
        <a class="header-nav__link" href="#">ACCESSORIOES</a>
      </li>
      <li class="header__item header-nav__item">
        <a class="header-nav__link" href="#">RESTOCKED</a>
      </li>
    </ul>
    <a class="header__logo-link" href="/">
      <img class="header__logo" src="../assets/images/logo.png" alt="" />
    </a>
    <ul class="header__nav header-nav flex ml-auto">
      <li class="header-nav__item">
        <a class="header-nav__link" href="#">SEARCH</a>
      </li>
      <li class="header-nav__item">
        <a class="header-nav__link" href="#">SIGN IN</a>
      </li>
      <li class="header-nav__item">
        <a class="header-nav__link" href="#">CART 0</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "MyHeaderVue",
};
</script>

<style lang="scss">
@import "../assets/scss/vars";

.header {
  position: relative;
  align-items: center;

  height: 87px;
}

.header__nav {
}

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

.header__logo {
}

.header__logo-link {
  position: absolute;
  left: calc(50% - 55px);

  width: 110px;
}
</style>
