<template>
  <h5 class="checkout-form__title">Shipping method</h5>
  <div class="method">
    <div class="method__item">
      <input class="method__radio" id="method-economy" type="radio"/>
      <label class="method__label" for="method-economy">Economy</label>
      <p class="checkout__price main-font ml-auto">$4.75</p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.method {
  display: flex;
  flex-direction: column;
}

.method__item {
  display: flex;
  padding: 15px;

  border: 1px solid #bdbdbd;
}

.method__radio {
  margin-right: 10px;
}

.method__label {
}
</style>
