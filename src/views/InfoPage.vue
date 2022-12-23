<template>
  <div class="info">
    <div class="info__container">
      <h4 class="info__title">
        <span>Express checkout</span>
      </h4>
      <div class="info__payments info-payments">
        <img
          class="info-payments__img"
          src="../assets/images/shopify.jpg"
          alt=""
        />
        <img
          class="info-payments__img"
          src="../assets/images/paypal.jpg"
          alt=""
        />
        <img
          class="info-payments__img"
          src="../assets/images/googlepay.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="info__container">
      <h4 class="info__title">
        <span>or</span>
      </h4>
      <form class="info__form info-form" action="">
        <MyContactInfo />
        <MyShippingAddress />
        <div class="row space-between info__buttons">
          <button class="info__btn btn-primary">Continue to shipping</button>
          <button class="btn-small">return to cart</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useProductStore } from "@/store/productStore";
import MyContactInfo from "../components/info/MyContactInfo.vue";
import MyShippingAddress from "../components/info/MyShippingAddress.vue";

export default {
  name: "MyInfo",
  setup() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },
  components: { MyShippingAddress, MyContactInfo },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars";
</style>
