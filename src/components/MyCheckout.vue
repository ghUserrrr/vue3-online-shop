<template>
  <MyInfo />
</template>

<script>
import { useProductStore } from "@/store/productStore";
import MyInfo from "./MyInfo.vue";

export default {
  name: "MyCheckout",
  setup() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },
  components: { MyInfo },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars";
</style>
