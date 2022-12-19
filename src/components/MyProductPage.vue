<template>
  <section class="product flex">
    <img class="product__img" :src="productProp.image" alt="product image" />
    <div class="product__info flex">
      <h4 class="product__title">{{ productProp.title }}</h4>
      <span class="product__price">${{ productProp.price }}</span>
      <div class="product__colors product-colors product__option">
        <span class="product-colors__title uppercase">COLOR:</span>
        <button class="product-colors__btn"></button>
      </div>
      <div class="product__sizes product__option">
        <span class="product-sizes__title uppercase">SIZE:</span>
        <div class="prosuct-size__buttons">
          <button
            v-for="(size, index) in productProp.availableSizes"
            :key="index"
            class="product-sizes__btn"
          >
            {{ size }}
          </button>
        </div>
      </div>
      <button class="product__btn btn btn-primary uppercase">ADD TO BAG</button>
      <div class="product__accordion product-accordion">
        <span class="product-accordion__title uppercase">DATAILS *</span>
        <p class="product-accordion__description">
          {{ productProp.details }}
        </p>
      </div>
      <div class="product__accordion">
        <span class="product-accordion__title uppercase"
          >SHIPPING & RETURNS *</span
        >
        <span class="product-accordion__title uppercase">SHIPPING INFO</span>
        <span>Order delivery time:</span>
        <p>
          All orders are shipped priority/first class & delivered 5-7 business
          days from the day you place the order.
        </p>
        <span>Free shipping on orders over $75.</span>
        <span>Shipping fee:</span>
        <p>
          Up to $10 = $3.75 $10.01 - $30.00 = $4.75 $30.01 - $75.00 = $5.75
          $75.01 & over = free shipping
        </p>
        <p>
          Up to $10 = $3.75 $10.01 - $30.00 = $4.75 $30.01 - $75.00 = $5.75
          $75.01 & over = free shipping
        </p>
        <span class="product-accordion__title uppercase">RETURNS INFO </span>
        <span>Free returns.</span>
        <p>
          We will accept all authorized returns All returns are accepted as long
          as the request is made to return the item within 30 days of receiving
          the merchandise. Once approved we will generate the FREE UPS prepaid
          label, we will email you with the label attached. Just print the
          label, attach it to any box/package and return the items. You will
          have 30 days to send the item back for full refund once you receive
          the free return label. Once we receive the items back we will process
          the return and refund the balance back to your account. Please note
          free return labels are available for items being shipped within 48
          continental states only. Please contact us here ovroefashion@gmail.com
          to receive an RMA# for your return. Please include your Order#, items
          returning, and the reason for the return.
        </p>
      </div>
      <button>share</button>
    </div>
  </section>
</template>
<script>
import { useProductStore } from "../store/productStore";

export default {
  name: "MyProduct",

  setup() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },

  props: {
    productProp: {
      type: Object,
    },
  },

  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/vars";

.product {
  margin-bottom: 191px;
  width: 100%;

  outline: 1px red solid;
}

.product__info {
  flex-direction: column;
  margin-left: auto;
  max-width: 495px;
}

.product__title {
  margin-bottom: 33px;

  font-family: "work-sans", Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 140%;
}

.product__price {
  margin-bottom: 42px;

  font-family: "work-sans", Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 140%;
}

.product__option {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  padding: 21px 0;
  border-top: 1px solid #bdbdbd;
}

.product-colors__title {
}

.product-sizes__title {
  grid-column-start: span 1;
}

.product-sizes__btn {
  width: 30px;
  height: 30px;

  border: 1px solid $main-font-color;

  &:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
