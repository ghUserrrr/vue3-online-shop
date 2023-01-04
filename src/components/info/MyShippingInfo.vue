<template>
  <div class="checkout-form__item">
    <h5 class="checkout__title">Shipping address</h5>
    <div class="checkout-form__personal grid">
      <input v-model="shippingInfo.firstName" @input="setShippingInfo" class="checkout__input" type="text"
             placeholder="First name"/>
      <input v-model="shippingInfo.lastName" @input="setShippingInfo" class="checkout__input" type="text"
             placeholder="Last name"/>
    </div>
    <input v-model="shippingInfo.address" @input="setShippingInfo" class="checkout__input" type="text"
           placeholder="Address"/>
    <input v-model="shippingInfo.apartment" @input="setShippingInfo"
           class="checkout__input"
           type="text"
           placeholder="Appartment, suite, etc. (optional)"
    />
    <input v-model="shippingInfo.city" @input="setShippingInfo" class="checkout__input" type="text"
           placeholder="City"/>
    <div class="checkout-form__destination grid">
      <input v-model="shippingInfo.country" @input="setShippingInfo" class="checkout__input" type="text"
             placeholder="Country"/>
      <input v-model="shippingInfo.state" @input="setShippingInfo" class="checkout__input" type="text"
             placeholder="State"/>
      <input v-model="shippingInfo.zipCode" @input="setShippingInfo" class="checkout__input" type="text"
             placeholder="ZIP code"/>
    </div>
    <input v-model="shippingInfo.phone" @input="setShippingInfo" class="checkout__input" type="text"
           placeholder="phone"/>
  </div>
</template>

<script>
import {useProductStore} from "@/store/productStore";

export default {
  name: "MyShippingInfo",
  data() {
    return {
      shippingInfo: {
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        country: '',
        state: '',
        zipCode: '',
        phone: ''
      }
    }
  },

  methods: {
    setShippingInfo() {
      this.$emit('setShippingInfo', this.shippingInfo)
    }
  },

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
