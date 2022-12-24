<template>
  <div class="shipping">
    <MyClientForm class="shipping__form"/>
    <div class="shipping__method">
      <MyShippingMethod/>
    </div>
    <div class="row space-between checkout__buttons">
      <button class="checkout__btn btn-primary">Continue to payment</button>
      <button class="btn-small">return to cart</button>
    </div>
  </div>
</template>

<script>
import {useProductStore} from "@/store/productStore";
import MyShippingMethod from "@/components/shipping/MyShippingMethod.vue";
import MyClientForm from "@/components/MyClientForm.vue";

export default {
  name: "MyShipping",
  components: {MyClientForm, MyShippingMethod},
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

.shipping__form {
  margin-bottom: 45px;
}

.shipping__method {
  margin-bottom: 45px;
}
</style>
