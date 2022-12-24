<template>
  <div class="checkout-form__item">
    <h5 class="checkout__title">Shipping address</h5>
    <div class="checkout-form__personal grid">
      <input class="checkout__input" type="text" placeholder="First name"/>
      <input class="checkout__input" type="text" placeholder="Last name"/>
    </div>
    <input class="checkout__input" type="text" placeholder="Address"/>
    <input
        class="checkout__input"
        type="text"
        placeholder="Appartment, suite, etc. (optional)"
    />
    <input class="checkout__input" type="text" placeholder="City"/>
    <div class="checkout-form__destination grid">
      <input class="checkout__input" type="text" placeholder="City"/>
      <input class="checkout__input" type="text" placeholder="City"/>
      <input class="checkout__input" type="text" placeholder="City"/>
    </div>
    <input class="checkout__input" type="text" placeholder="phone"/>
  </div>
</template>

<script>
import {useProductStore} from "@/store/productStore";

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

.checkout-form__personal {
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.checkout-form__destination {
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
