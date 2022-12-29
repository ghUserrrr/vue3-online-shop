<template>
  <div class="payment">
    <MyClientForm />
    <MyPayment />
    <div class="row space-between checkout__buttons">
      <button class="checkout__btn btn-primary">pay now</button>
      <button class="btn-small">return to cart</button>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '@/store/productStore';
import MyClientForm from '@/components/MyClientForm.vue';
import MyPayment from '@/components/payment/MyPayment';

export default {
  name: 'MyShipping',
  components: { MyPayment, MyClientForm },
  setup() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars';
</style>
