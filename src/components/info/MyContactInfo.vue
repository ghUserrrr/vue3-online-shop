<template>
  <div class="checkout-form__item">
    <div class="row space-between">
      <h5 class="checkout__title">Contact information</h5>
    </div>
    <div
      v-if="v$.contactInfo.email.$dirty && v$.contactInfo.email.$invalid"
      class="erros"
    ></div>
    <small
      v-for="(error, index) in v$.contactInfo.email.$errors"
      :key="index"
      style="color: red"
    >
      {{ error.$message }}
    </small>
    <input
      v-model="contactInfo.email"
      @input="
        v$.contactInfo.email.$touch();
        setContactInfo();
        setIsValidationPassed();
      "
      :class="{
        input_error:
          v$.contactInfo.email.$dirty && v$.contactInfo.email.$invalid,
      }"
      class="checkout__input"
      type="email"
      placeholder="E-mail"
    />
    <div class="row">
      <input
        v-model="contactInfo.enableNotifications"
        @click="
          contactInfo.enableNotifications = !contactInfo.enableNotifications;
          setContactInfo();
        "
        class="checkout__checkbox"
        id="mail"
        type="checkbox"
      />
      <label class="grey-txt" for="mail">E-mail me with news and offers</label>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '@/store/productStore';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

export default {
  name: 'MyContactInfo',
  setup() {
    const productStore = useProductStore();
    return {
      productStore,
      v$: useVuelidate(),
    };
  },

  mounted() {
    this.contactInfo = this.productStore.userInfo.contactInfo;
    this.setContactInfo();
    this.setIsValidationPassed();
  },

  data() {
    return {
      isValidationPassed: false,
      contactInfo: {
        email: '',
        enableNotifications: false,
      },
    };
  },

  validations() {
    return {
      contactInfo: {
        email: {
          required,
          email,
        },
      },
    };
  },

  methods: {
    setContactInfo() {
      this.$emit('setContactInfo', this.contactInfo, this.isValidationPassed);
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
</style>
