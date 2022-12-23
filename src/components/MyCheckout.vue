<template>
  <RouterView />
  <!-- <MyCart /> -->
</template>

<script>
import { useProductStore } from "@/store/productStore";
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
</style>
