<template>
  <div class="payment-info">
    <h5 class="checkout-form__title">Payment</h5>
    <p class="grey-txt">All transactions are secure and encrypted.</p>
    <ul class="payment__list">
      <li class="payment__item payment-item">
        <div
          @click="
            closeAllPayments();
            payments.creditCard.isOpen = true;
          "
          class="payment-item__header"
        >
          <div
            :class="{ active: payments.creditCard.isOpen }"
            class="payment__check"
          ></div>
          <p class="payment__title main-font">Credit card</p>
          <div class="payment__cards ml-auto flex">
            <img src="../../assets/images/visa-small.svg" alt="" />
            <img src="../../assets/images/master-small.svg" alt="" />
            <img src="../../assets/images/american-small.svg" alt="" />
            <img src="../../assets/images/discover-small.svg" alt="" />
            <p class="grey-text">and more...</p>
          </div>
        </div>
        <div v-if="payments.creditCard.isOpen" class="payment-item__form">
          <input
            class="checkout__input"
            type="number"
            placeholder="Card number"
          />
          <input
            class="checkout__input"
            type="text"
            placeholder="Name on card"
          />
          <div class="row gap-15">
            <input
              class="checkout__input w-50"
              type="number"
              placeholder="Expiration date (MM/YY)"
            />
            <input
              class="checkout__input w-50"
              type="number"
              placeholder="Security code"
            />
          </div>
        </div>
      </li>
      <li class="payment__item payment-item">
        <div
          @click="
            closeAllPayments();
            payments.shopPay.isOpen = true;
          "
          class="payment-item__header"
        >
          <div
            :class="{ active: payments.shopPay.isOpen }"
            class="payment__check"
          ></div>
          <img
            class="payment-item__img"
            src="../../assets/images/shopify_installments.svg"
            alt="shopify logotype"
          />
          <p class="main-font">Pay in full or in 4 installers</p>
        </div>
        <div v-if="payments.shopPay.isOpen" class="redirect">
          <img
            class="redirect__img"
            src="../../assets/images/redirect.svg"
            alt=""
          />
          <p class="redirect__text grey-txt">
            After clicking “Complete order”, you will be redirected to PayPal to
            complete your purchase securely.
          </p>
        </div>
      </li>
      <li
        @click="
          closeAllPayments();
          payments.payPal.isOpen = true;
        "
        class="payment__item payment-item"
      >
        <div class="payment-item__header">
          <div
            :class="{ active: payments.payPal.isOpen }"
            class="payment__check"
          ></div>
          <img
            class="payment-item__img"
            src="../../assets/images/PayPal-Logo.svg"
            alt="shopify logotype"
          />
        </div>
        <div v-if="payments.payPal.isOpen" class="redirect">
          <img
            class="redirect__img"
            src="../../assets/images/redirect.svg"
            alt=""
          />
          <p class="redirect__text grey-txt">
            After clicking “Complete order”, you will be redirected to PayPal to
            complete your purchase securely.
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyPayment',
  data() {
    return {
      payments: {
        creditCard: {
          isOpen: false,
        },
        payPal: {
          isOpen: false,
        },
        shopPay: {
          isOpen: false,
        },
      },
    };
  },

  methods: {
    closeAllPayments() {
      for (let index in this.payments) {
        this.payments[index].isOpen = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/vars';

.payment__list {
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
}

.payment__item {
  padding: 15px;

  &:not(:last-child) {
    border-bottom: 1px solid #bdbdbd;
  }
}

.payment-item__header {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.payment__cards {
  align-items: center;
  gap: 6px;
}

.payment-item__form {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
}

.redirect {
  padding: 52px 108px 44px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
}
.redirect__img {
  height: 51px;
  margin-bottom: 11px;
}
.redirect__text {
  text-align: center;
}

.payment__check {
  margin-right: 10px;
  height: 19px;
  width: 19px;

  border-radius: 50%;
  border: 1px solid #bdbdbd;
}

.active {
  border: 1px solid #000000;
  box-shadow: 0px 0px 0px 6px rgb(0, 0, 0) inset;
}

// .payment__title {
// }

// .main-font {
// }

.payment-item__img {
  margin-right: 30px;
}

.w-50 {
  width: 50%;
}

.gap-15 {
  gap: 15px;
}
</style>
