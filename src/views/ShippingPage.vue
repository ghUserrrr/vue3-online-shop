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
    <MyShippingMethod />
  </div>
</template>

<script>
import { useProductStore } from "@/store/productStore";
import MyShippingMethod from "@/components/shipping/MyShippingMethod.vue";

export default {
  name: "MyShipping",
  components: { MyShippingMethod },
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
