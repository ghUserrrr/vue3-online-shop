<template>
  <div class="client-info">
    <div class="client-info__item grid">
      <span class="client-info__title grey-txt">Contact</span>
      <span class="client-info__value">{{ email }}</span>
      <button class="client-info__btn small-btn ml-auto">change</button>
    </div>
    <div class="client-info__item grid">
      <span class="client-info__title grey-txt">Ship to</span>
      <span class="client-info__value"
      >{{ shippingAddress }}</span
      >
      <button class="client-info__btn small-btn ml-auto">change</button>
    </div>
  </div>
</template>

<script>
import {useProductStore} from "@/store/productStore";

export default {
  name: "MyUserForm",
  setup() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },
  mounted() {
    this.email = this.productStore.userInfo.contactInfo.email

  },

  data() {
    return {
      email: ''
    }
  },

  computed: {
    shippingAddress() {
      return this.productStore.userInfo.shippingInfo.apartment + ' ' + this.productStore.userInfo.shippingInfo.address + ' ' + this.productStore.userInfo.shippingInfo.city + ' ' + this.productStore.userInfo.shippingInfo.zipCode
    }
  },
};
</script>

<style lang="scss" scoped>
.client-info {
  padding: 15px;

  border: 1px solid #bdbdbd;
}

.client-info__item {
  grid-template-columns: repeat(6, 1fr);

  &:not(:first-child) {
    padding-top: 15px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 15px;
  }

}

.client-info__title {
  grid-column-start: span 1;
}

.client-info__value {
  grid-column-start: span 4;
}

.client-info__btn {
  grid-column-start: 6;
}

</style>
