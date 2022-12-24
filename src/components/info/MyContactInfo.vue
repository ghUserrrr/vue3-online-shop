<template>
  <div class="checkout-form__item">
    <div class="row space-between">
      <h5 class="checkout__title">Contact information</h5>
      <p>Already have an account?</p>
      <button class="btn-small">sign in</button>
    </div>
    <input class="checkout__input" type="email" placeholder="E-mail"/>
    <div class="row">
      <input class="checkout__checkbox" id="mail" type="checkbox"/>
      <label class="grey-txt" for="mail">E-mail me with news and offers</label>
    </div>
  </div>
</template>

<script>
import {useProductStore} from "@/store/productStore";

export default {
  name: "MyContactInfo",
  setup() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/vars";
</style>
