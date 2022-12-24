<template>
  <div class="info">
    <div class="checkout__container">
      <h4 class="checkout__title">
        <span>Express checkout</span>
      </h4>
      <div class="checkout__payments checkout-payments">
        <img
            class="checkout-payments__img"
            src="../assets/images/shopify.jpg"
            alt=""
        />
        <img
            class="checkout-payments__img"
            src="../assets/images/paypal.jpg"
            alt=""
        />
        <img
            class="checkout-payments__img"
            src="../assets/images/googlepay.jpg"
            alt=""
        />
      </div>
    </div>
    <div class="checkout__container">
      <h4 class="checkout__title">
        <span>or</span>
      </h4>
      <form class="checkout__form checkout-form" action="">
        <MyContactInfo/>
        <MyShippingAddress/>
        <div class="row space-between checkout__buttons">
          <button class="checkout__btn btn-primary">Continue to shipping</button>
          <button class="btn-small">return to cart</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {useProductStore} from "@/store/productStore";
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
  components: {MyShippingAddress, MyContactInfo},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars";

.checkout__buttons {
  margin-bottom: 50px;
}
</style>
