<template>
  <div class="checkout-form__item">
    <h5 class="checkout__title">Shipping address</h5>
    <small v-if="v$.$anyDirty && v$.$invalid" style="color: red"
      >Complete all fields</small
    >
    <div class="checkout-form__personal grid">
      <input
        v-model="shippingInfo.firstName"
        @input="
          v$.shippingInfo.firstName.$touch();
          setShippingInfo();
          setIsValidationPassed();
        "
        :class="{
          input_error:
            v$.shippingInfo.firstName.$dirty &&
            v$.shippingInfo.firstName.$invalid,
        }"
        class="checkout__input"
        type="text"
        placeholder="First name"
      />
      <input
        v-model="shippingInfo.lastName"
        @input="
          v$.shippingInfo.lastName.$touch();
          setShippingInfo();
          setIsValidationPassed();
        "
        :class="{
          input_error:
            v$.shippingInfo.lastName.$dirty &&
            v$.shippingInfo.lastName.$invalid,
        }"
        class="checkout__input"
        type="text"
        placeholder="Last name"
      />
    </div>
    <input
      v-model="shippingInfo.address"
      @input="
        v$.shippingInfo.address.$touch();
        setShippingInfo();
        setIsValidationPassed();
      "
      :class="{
        input_error:
          v$.shippingInfo.address.$dirty && v$.shippingInfo.address.$invalid,
      }"
      class="checkout__input"
      type="text"
      placeholder="Address"
    />
    <input
      v-model="shippingInfo.apartment"
      @input="
        v$.shippingInfo.apartment.$touch();
        setShippingInfo();
        setIsValidationPassed();
      "
      :class="{
        input_error:
          v$.shippingInfo.apartment.$dirty &&
          v$.shippingInfo.apartment.$invalid,
      }"
      class="checkout__input"
      type="text"
      placeholder="Apartment, suite, etc. (optional)"
    />
    <input
      v-model="shippingInfo.city"
      @input="
        v$.shippingInfo.city.$touch();
        setShippingInfo();
        setIsValidationPassed();
      "
      :class="{
        input_error:
          v$.shippingInfo.city.$dirty && v$.shippingInfo.city.$invalid,
      }"
      class="checkout__input"
      type="text"
      placeholder="City"
    />
    <div class="checkout-form__destination grid">
      <input
        v-model="shippingInfo.country"
        @input="
          v$.shippingInfo.country.$touch();
          setShippingInfo();
          setIsValidationPassed();
        "
        :class="{
          input_error:
            v$.shippingInfo.country.$dirty && v$.shippingInfo.country.$invalid,
        }"
        class="checkout__input"
        type="text"
        placeholder="Country"
      />
      <input
        v-model="shippingInfo.state"
        @input="
          v$.shippingInfo.state.$touch();
          setShippingInfo();
          setIsValidationPassed();
        "
        :class="{
          input_error:
            v$.shippingInfo.state.$dirty && v$.shippingInfo.state.$invalid,
        }"
        class="checkout__input"
        type="text"
        placeholder="State"
      />
      <input
        v-model="shippingInfo.zipCode"
        @input="
          v$.shippingInfo.zipCode.$touch();
          setShippingInfo();
          setIsValidationPassed();
        "
        :class="{
          input_error:
            v$.shippingInfo.zipCode.$dirty && v$.shippingInfo.zipCode.$invalid,
        }"
        class="checkout__input"
        type="text"
        placeholder="ZIP code"
      />
    </div>
    <input
      v-model="shippingInfo.phone"
      @input="
        v$.shippingInfo.phone.$touch();
        setShippingInfo();
        setIsValidationPassed();
      "
      :class="{
        input_error:
          v$.shippingInfo.phone.$dirty && v$.shippingInfo.phone.$invalid,
      }"
      class="checkout__input"
      type="text"
      placeholder="phone"
    />
  </div>
</template>

<script>
import { useProductStore } from '@/store/productStore';
import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';

export default {
  name: 'MyShippingInfo',
  setup() {
    const productStore = useProductStore();
    return {
      productStore,
      v$: useVuelidate(),
    };
  },
  mounted() {
    this.shippingInfo = this.productStore.userInfo.shippingInfo;
    this.setShippingInfo();
    this.setIsValidationPassed();
  },
  data() {
    return {
      isValidationPassed: false,
      shippingInfo: {
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        country: '',
        state: '',
        zipCode: '',
        phone: '',
      },
    };
  },

  validations() {
    return {
      shippingInfo: {
        firstName: {
          $autoDirty: true,
          required,
          message: helpers.withMessage('This field cannot be empty', required),
        },
        lastName: {
          $autoDirty: true,
          required,
          message: helpers.withMessage('This field cannot be empty', required),
        },
        address: {
          $autoDirty: true,
          required,
          message: helpers.withMessage('This field cannot be empty', required),
        },
        apartment: {
          $autoDirty: true,
          required,
          message: helpers.withMessage('This field cannot be empty', required),
        },
        city: {
          $autoDirty: true,
          required,
          message: helpers.withMessage('This field cannot be empty', required),
        },
        country: {
          $autoDirty: true,
          required,
          message: helpers.withMessage('This field cannot be empty', required),
        },
        state: {
          $autoDirty: true,
          required,
          message: helpers.withMessage('This field cannot be empty', required),
        },
        zipCode: {
          $autoDirty: true,
          required,
          message: helpers.withMessage('This field cannot be empty', required),
        },
        phone: {
          $autoDirty: true,
          required,
          message: helpers.withMessage('This field cannot be empty', required),
        },
      },
    };
  },

  methods: {
    setShippingInfo() {
      this.$emit('setShippingInfo', this.shippingInfo);
    },
    setIsValidationPassed() {
      this.isValidationPassed = !this.v$.$invalid;
      this.$emit('setIsValidationPassed', this.isValidationPassed);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/vars';

.checkout-form__personal {
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.checkout-form__destination {
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
