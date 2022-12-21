<template>
  <section class="product flex">
    <img class="product__img" :src="product.image" alt="product image" />
    <div class="product__info flex">
      <h4 class="product__title">{{ product.title }}</h4>
      <span class="product__price">${{ product.price }}</span>
      <div class="product__options">
        <div class="product__colors product-colors product__option">
          <span class="product-colors__title uppercase">COLOR:</span>
          <div
            v-if="!isColorSelectionVisible"
            @click="toggleColorsSelection()"
            class="product-colors__btn"
          >
            <img
              class="product-colors__img"
              :src="currentColor.imageUrl"
              alt=""
            />
            <p class="product-colors__text">{{ currentColor.name }}</p>
            <!-- <span>{{ currentColor.name }}</span> -->
            <img
              class="product__arrow"
              src="../assets/images/arrow.svg"
              alt=""
            />
          </div>
          <ul v-if="isColorSelectionVisible" class="product-colors__list">
            <li
              v-for="(color, index) in colors"
              :key="index"
              @click="
                setCurrentColor(index);
                toggleColorsSelection();
              "
              class="product-colors__item"
            >
              <img class="product-colors__img" :src="color.imageUrl" alt="" />
              <p class="product-colors__text">{{ color.name }}</p>
            </li>
          </ul>
        </div>
        <div class="product__sizes product__option">
          <span class="product-sizes__title uppercase">SIZE:</span>
          <div class="prosuct-size__buttons">
            <button
              v-for="(size, index) in product.availableSizes"
              :key="index"
              @click="setCurrentSize(index)"
              :class="{
                'product-sizes__btn_active': size === this.currentSize,
              }"
              class="product-sizes__btn"
            >
              {{ size }}
            </button>
          </div>
        </div>
      </div>
      <button class="product__btn btn btn-primary uppercase">ADD TO BAG</button>
      <div class="product__accordion product-accordion">
        <div @click="toggleDetails" class="product-accordion__item">
          <div
            :class="{ 'margin-0': !isDetailsOpen }"
            class="product-accordion__title-wrapper"
          >
            <h6 class="product-accordion__title uppercase">DATAILS</h6>
            <img v-if="isDetailsOpen" src="../assets/images/minus.svg" alt="" />
            <img v-else src="../assets/images/plus.svg" alt="" />
          </div>
          <div v-if="isDetailsOpen" class="product-accordion__info-wrapper">
            <p class="product-accordion__description">
              {{ product.details }}
            </p>
          </div>
        </div>
        <div @click="toggleSizeInfo" class="product-accordion__item">
          <div
            :class="{ 'margin-0': !isSizeInfoOpen }"
            class="product-accordion__title-wrapper"
          >
            <h6 class="product-accordion__title uppercase">SIZE & FIT</h6>
            <img
              v-if="isSizeInfoOpen"
              src="../assets/images/minus.svg"
              alt=""
            />
            <img v-else src="../assets/images/plus.svg" alt="" />
          </div>
          <div v-if="isSizeInfoOpen" class="product-accordion__info-wrapper">
            <p class="product-accordion__description">
              Item Measurements: SIZE S
            </p>
            <p class="product-accordion__description">
              Item Measurements: Length: 28", Bust: 32"
            </p>
            <p class="product-accordion__description">True to size</p>
          </div>
        </div>

        <div @click="toggleShippingInfo" class="product-accordion__item">
          <div
            :class="{ 'margin-0': !isShippingInfoOpen }"
            class="product-accordion__title-wrapper"
          >
            <h6 class="product-accordion__title uppercase">
              SHIPPING & RETURNS
            </h6>
            <img
              v-if="isShippingInfoOpen"
              src="../assets/images/minus.svg"
              alt=""
            />
            <img v-else src="../assets/images/plus.svg" alt="" />
          </div>
          <div
            v-if="isShippingInfoOpen"
            class="product-accordion__info-wrapper"
          >
            <p class="product-accordion__title uppercase">SHIPPING INFO</p>
            <p class="product-accordion__title">Order delivery time:</p>
            <p class="product-accordion__description margin-bottom-14">
              All orders are shipped priority/first class & delivered 5-7
              business days from the day you place the order.
            </p>
            <p class="product-accordion__title">
              Free shipping on orders over $75.
            </p>
            <p class="product-accordion__title">Shipping fee:</p>
            <p class="product-accordion__description">Up to $10 = $3.75</p>
            <p class="product-accordion__description">
              $10.01 - $30.00 = $4.75
            </p>
            <p class="product-accordion__description">
              $30.01 - $75.00 = $5.75
            </p>
            <p class="product-accordion__description margin-bottom-14">
              $75.01 & over = free shipping
            </p>
            <p class="product-accordion__description"></p>
            <p class="product-accordion__title uppercase">RETURNS INFO</p>
            <p class="product-accordion__title">Free returns.</p>
            <p class="product-accordion__description">
              We will accept all authorized returns
            </p>
            <p class="product-accordion__description">
              All returns are accepted as long as the request is made to return
              the item within 30 days of receiving the merchandise.
            </p>
            <p class="product-accordion__description">
              Once approved we will generate the FREE UPS prepaid label, we will
              email you with the label attached. Just print the label, attach it
              to any box/package and return the items.
            </p>
            <p class="product-accordion__description">
              You will have 30 days to send the item back for full refund once
              you receive the free return label.
            </p>
            <p class="product-accordion__description">
              Once we receive the items back we will process the return and
              refund the balance back to your account.
            </p>
            <p class="product-accordion__description">
              Please note free return labels are available for items being
              shipped within 48 continental states only.
            </p>
            <p class="product-accordion__description">
              Please contact us here ovroefashion@gmail.com to receive an RMA#
              for your return.
            </p>
            <p class="product-accordion__description">
              Please include your Order#, items returning, and the reason for
              the return.
            </p>
          </div>
        </div>
      </div>
      <button>share</button>
    </div>
  </section>
</template>
<script>
import { useProductStore } from "../store/productStore";

export default {
  name: "MyProduct",

  data() {
    return {
      product: this.productStore.products[this.$route.params.id - 1],
      colors: [],
      currentColor: {},
      currentSize: {},
      isColorSelectionVisible: false,
      isDetailsOpen: false,
      isSizeInfoOpen: false,
      isShippingInfoOpen: false,
    };
  },

  methods: {
    toggleColorsSelection() {
      this.isColorSelectionVisible = !this.isColorSelectionVisible;
    },
    setCurrentColor(index) {
      this.currentColor = this.colors[index];
    },

    setCurrentSize(index) {
      this.currentSize = this.product.availableSizes[index];
    },

    toggleDetails() {
      this.isDetailsOpen = !this.isDetailsOpen;
    },
    toggleSizeInfo() {
      this.isSizeInfoOpen = !this.isSizeInfoOpen;
    },
    toggleShippingInfo() {
      this.isShippingInfoOpen = !this.isShippingInfoOpen;
    },
  },

  // computed: {
  //   product() {
  //     return this.productStore.products[this.$route.params.id - 1];
  //   },
  // },

  setup() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },

  mounted() {
    for (let color of this.product.availableColors) {
      for (let elem of this.productStore.filters.color.options) {
        if (elem.key === color) {
          this.colors.push(elem);
        }
      }
    }

    this.currentColor = this.colors[0];
    this.currentSize = this.product.availableSizes[0];
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/vars";

.product {
  margin-bottom: 191px;
  width: 100%;
}

.product__img {
  max-height: 705px;
  min-width: 470px;
}

.product__btn {
  margin: 25px 0;
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
  padding: 20px 0;
  border-top: 1px solid #bdbdbd;
  &:last-child {
    border-bottom: 1px solid #bdbdbd;
  }
}
.product-sizes__title {
  grid-column-start: span 1;
}

.product-sizes__btn {
  width: 30px;
  height: 30px;

  border: 1px solid $main-font-color;
  transition: background 0.2s ease, color 0.2s ease;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    color: #fff;

    background-color: #636363;
  }
}

.product-sizes__btn_active {
  color: #fff;

  background-color: #000000;
}

// .product__colors {
// }

.product-colors__btn {
  display: flex;
  align-items: center;

  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }
}

.product-colors__list {
  display: flex;
  flex-direction: column;

  transition: background 0.3s ease;
  cursor: pointer;
}
.product-colors__item {
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:hover {
    background-color: #f3f3f3;
  }
}
.product-colors__img {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}
// .product-colors__text {
// }

.product__accordion {
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
  width: 495px;
}

.product-accordion__item {
  padding: 20px 0;

  border-top: 1px solid #bdbdbd;

  transition: background 0.3s ease;
  cursor: pointer;

  &:last-child {
    border-bottom: 1px solid #bdbdbd;
  }

  &:hover {
    background-color: #f3f3f3;
  }
}

.product-accordion__title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.product-accordion__title {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: $main-font-color;
}

.product-accordion__description {
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 140%;
  color: $main-font-color;
}

.product__arrow {
  margin-left: auto;
}

.margin-bottom-14 {
  margin-bottom: 14px;
}

.margin-0 {
  margin: 0;
}
</style>
