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
        <div class="info-form__item">
          <div class="row space-between">
            <h5 class="checkout__title">Contact information</h5>
            <p>Already have an account?</p>
            <button class="btn-small">sign in</button>
          </div>
          <input class="info__input" type="email" placeholder="E-mail" />
          <div class="row">
            <input class="info__checkbox" id="mail" type="checkbox" />
            <label class="grey-txt" for="mail"
              >E-mail me with news and offers</label
            >
          </div>
        </div>
        <div class="info-form__item">
          <h5 class="checkout__title">Shipping address</h5>
          <div class="info-form__personal grid">
            <input class="info__input" type="text" placeholder="First name" />
            <input class="info__input" type="text" placeholder="Last name" />
          </div>
          <input class="info__input" type="text" placeholder="Address" />
          <input
            class="info__input"
            type="text"
            placeholder="Appartment, suite, etc. (optional)"
          />
          <input class="info__input" type="text" placeholder="City" />
          <div class="info-form__destination grid">
            <input class="info__input" type="text" placeholder="City" />
            <input class="info__input" type="text" placeholder="City" />
            <input class="info__input" type="text" placeholder="City" />
          </div>
          <input class="info__input" type="text" placeholder="phone" />
        </div>
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

export default {
  name: "MyInfo",
  setup() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars";
.info__container {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  width: 720px;

  border-bottom: 1px solid #bdbdbd;
}

.info__payments {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 25px;
}

.info__title {
  overflow: hidden;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;

  color: #000000;

  text-align: center;
  margin-bottom: 25px;

  span {
    display: inline-block;
    vertical-align: middle;
  }

  &:before,
  &:after {
    content: "";
    position: relative;

    display: inline-block;
    vertical-align: middle;
    width: 100%;
    height: 1px;
    background-color: #636363;
  }

  &:before {
    margin-left: -100%;
    left: -14px;
  }

  &:after {
    margin-right: -100%;
    right: -14px;
  }
}
.info__form {
  display: flex;
  flex-direction: column;
}

.info-form__item {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.info__input {
  padding: 15px 14px;
  margin-bottom: 15px;

  border: 1px solid #636363;
}

.info__checkbox {
  margin-right: 5px;
}

.grey-txt {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;

  color: #636363;
}
.info-form__personal {
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.info-form__destination {
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.info__buttons {
  margin-bottom: 50px;
}

.info__btn {
  padding: 16px 153px;
}
</style>
