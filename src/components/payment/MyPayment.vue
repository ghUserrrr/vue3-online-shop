<template>
  <div class="payment-info">
    <h5 class="checkout-form__title">Payment</h5>
    <p class="grey-text">All transactions are secure and encrypted.</p>
    <ul class="payment__list">
      <li class="payment__item payment-item">
        <div class="payment-item__header">
          <div class="payment__check"></div>
          <p class="payment__title main-font">Credit card</p>
        </div>
      </li>
      <li class="payment__item payment-item">
        <div class="payment-item__header">
          <img class="payment-item__img"
               src="../../assets/images/shopify_installments.svg" alt="shopify logotype">
          <div class="payment__check"></div>
          <p class="main-font">Pay in full or in 4 installers</p>
        </div>
      </li>
      <li class="payment__item payment-item">
        <div class="payment-item__header">
          <div class="payment__check"></div>
          <img class="payment-item__img"
               src="../../assets/images/PayPal-Logo.svg" alt="shopify logotype">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

</style>