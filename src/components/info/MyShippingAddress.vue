<template>
  <div class="info-form__item">
    <h5 class="checkout__title">Shipping address</h5>
    <div class="info-form__personal grid">
      <input class="info__input" type="text" placeholder="First name" />
      <input class="info__input" type="text" placeholder="Last name" />
    </div>
    <input class="info__input" type="text" placeholder="Address" />
    <input
      class="info__input"
      type="text"
      placeholder="Appartment, suite, etc. (optional)"
    />
    <input class="info__input" type="text" placeholder="City" />
    <div class="info-form__destination grid">
      <input class="info__input" type="text" placeholder="City" />
      <input class="info__input" type="text" placeholder="City" />
      <input class="info__input" type="text" placeholder="City" />
    </div>
    <input class="info__input" type="text" placeholder="phone" />
  </div>
</template>

<script>
import { useProductStore } from "@/store/productStore";

export default {
  name: "MyShippingAddress",
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
