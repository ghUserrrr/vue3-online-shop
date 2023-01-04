<template>
  <div class="checkout-form__item">
    <div class="row space-between">
      <h5 class="checkout__title">Contact information</h5>
      <p>Already have an account?</p>
      <button class="btn-small">sign in</button>
    </div>
    <input v-model="contactInfo.email" @input="setContactInfo()" class="checkout__input" type="email"
           placeholder="E-mail"/>
    <div class="row">
      <input v-model="contactInfo.enableNotifications"
             @click="contactInfo.enableNotifications = !contactInfo.enableNotifications;
              setContactInfo()"
             class="checkout__checkbox"
             id="mail" type="checkbox"/>
      <label class="grey-txt"
             for="mail">E-mail me with news and offers</label>
    </div>
  </div>
</template>

<script>
import {useProductStore} from "@/store/productStore";

export default {
  name: "MyContactInfo",
  setup() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },
  data() {
    return {
      contactInfo: {
        email: '',
        enableNotifications: false,
      }
    }
  },

  methods: {
    setContactInfo() {
      this.$emit('setContactInfo', this.contactInfo)
    }
  },

  mounted() {
    this.contactInfo = this.productStore.userInfo.contactInfo
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/vars";
</style>
