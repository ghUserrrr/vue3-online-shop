<template>
  <div class="background">
    <div v-click-outside="closeCart" class="cart">
      <div class="cart__header">
        <h3 class="cart__title">
          YOUR CART ({{ this.productStore.itemsInCart }})
        </h3>
        <img class="cross" src="" alt=""/>
      </div>
      <ul class="cart__list">
        <li
            v-for="(product, index) in productStore.cart"
            :key="index"
            class="cart__item"
        >
          <img class="cart__img" :src="product.image" alt=""/>
          <div class="cart__info">
            <div class="cart__header">
              <h2 class="cart__product-title">{{ product.title }}</h2>
              <p class="cart__price cart__product-title">
                ${{ product.price }}
              </p>
            </div>
            <div class="cart__description cart-description">
              <p class="cart-description__title">COLOR:</p>
              <div class="cart-description__wrapper">
                <img
                    class="cart-description__img"
                    :src="product.color.imageUrl"
                    alt=""
                />
                <p class="cart-description__text">{{ product.color.name }}</p>
              </div>
            </div>
            <div class="cart__description cart-description">
              <p class="cart-description__title">SIZE:</p>
              <div class="cart-description__wrapper">
                <p class="cart-description__text">{{ product.size }}</p>
              </div>
            </div>
            <button @click="deleteProduct(index)" class="cart-item__btn btn-small">remove</button>
          </div>
        </li>
      </ul>
      <div class="cart__subtotal">
        <p>Subtotal</p>
        <p class="cart__product-title">
          ${{ this.productStore.subTotalPrice }}
        </p>
      </div>
      <p class="cart__description">
        Shipping, taxes, and discounts will be calculated at checkout
      </p>
      <button @click="
          $router.push(`/checkout/info`);
          closeCart()"
              class="btn btn-primary">Checkout
      </button>
    </div>
  </div>
</template>

<script>
import {useProductStore} from "@/store/productStore";

export default {
  name: "MyCart",
  setup() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },

  methods: {
    closeCart() {
      this.$emit("closeCart");
    },
    deleteProduct(index) {
      this.productStore.cart.splice(index, 1)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars";

.cart {
  z-index: 3;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  padding: 40px 70px;
  flex-direction: column;
  width: 50%;
  overflow: scroll;

  background-color: #fff;
}

.cart__title {
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 140%;
  text-transform: uppercase;
  color: $main-font-color;
}

.cart__header {
  display: flex;
  align-items: center;
  width: 100%;
}

.cart__product-title {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  text-transform: uppercase;
  color: $main-font-color;
}

// .cross {
// }
.cart__list {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  width: 100%;
}

.cart__item {
  display: flex;
  padding: 28px 0;
  width: 100%;

  border-top: 1px solid #bdbdbd;

  &:last-child {
    border-bottom: 1px solid #bdbdbd;
  }
}

.cart__img {
  margin-right: 45px;
  width: 120px;
  height: auto;
}

.cart__info {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.cart__price {
  margin-left: auto;
}

.cart__description {
  display: flex;
}

.cart-description__title {
  margin-right: 16px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #bdbdbd;
}

.cart-description__wrapper {
  display: flex;
  align-items: center;
}

.cart-description__img {
  margin-right: 10px;
}

.cart-description__text {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: $main-font-color;
  text-transform: capitalize;
}

.cart-item__btn {
  margin-top: auto;
  margin-right: auto;
}

.cart__subtotal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
}

.cart__description {
  margin-bottom: 12px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #636363;
}
</style>
