<template>
  <div class="checkout__container">
    <RouterView/>
  </div>
  <!-- <MyCart /> -->
</template>

<script>
import {useProductStore} from "@/store/productStore";
// import MyCart from "./MyCart.vue";

export default {
  name: "MyCheckout",
  setup() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },
  //   components: { MyCart },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars";

.checkout__container {
  width: 720px;
}
</style>
