<template>
  <div class="shipping">
    <div class="shipping__item">
      <span class="shipping__title">Contact</span>
      <span class="shipping__value">maccartny@gmail.com</span>
      <button class="small-btn ml-auto">change</button>
    </div>
    <div class="shipping__item">
      <span class="shipping__title">Ship to</span>
      <span class="shipping__value"
        >9550 S Eastern Ave ste 253-A102 Las Vegas NV 89123</span
      >
      <button class="small-btn ml-auto">change</button>
    </div>
    <h5 class="checkout__title">Shipping method</h5>
    <div class="method">
      <input class="method__radio" id="method-economy" type="radio" />
      <label class="method__label" for="method-economy">Economy</label>
      <p class="ml-auto">$4.75</p>
    </div>
  </div>
</template>

<script>
import { useProductStore } from "@/store/productStore";

export default {
  name: "MyShipping",
  setup() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars";
</style>
