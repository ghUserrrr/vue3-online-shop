<template>
  <div class="catalog">
    <ul class="catalog__filters catalog-filters flex">
      <li
          v-for="(item, index) in productStore.filters"
          :key="index"
          @click="
          closeAllFilters();
          openFilter(index);
        "
          class="catalog-filters__item"
      >
        <button class="catalog-filters__btn filters-btn product-font flex">
          {{ item.name }}
          <span>{{ filtersCounter }}</span>

          <span
              :class="[
              item.isFilterVisible ? 'filters-btn__minus' : 'filters-btn__plus',
            ]"
              class="filters-btn__icon"
          >
          </span>
        </button>
      </li>
    </ul>
    <div class="catalog__products flex">
      <MyColorFilter
          v-if="this.productStore.filters.color.isFilterVisible"
          v-bind:productsProp="products"
          v-on:updateProductsByColor="updateProductsByColor"
          v-on:closeColorFilter="closeAllFilters()"
      />
      <MySizeFilter
          v-if="this.productStore.filters.size.isFilterVisible"
          v-bind:productsProp="products"
          v-on:updateProductsBySize="updateProductsBySize"
          v-on:closeSizeFilter="closeAllFilters()"
      />
      <MyCategoryFilter
          v-if="this.productStore.filters.category.isFilterVisible"
          v-bind:productsProp="products"
          v-on:updateProductsByCategory="updateProductsByCategory"
          v-on:closeCategoryFilter="closeAllFilters()"
      />
      <div
          to="{name: 'productPage', params:{ productProp: currentProduct}}"
          v-for="(item, index) in fullyFilteredProducts"
          :key="index"
          @click="
          $router.push(`/product/${item.id}`);
          setCurrentProduct(index);
        "
          class="catalog__product catalog-product"
      >
        <img :src="item.image" alt=""/>
        <h4 class="catalog-product__title main-font">
          {{ item.title }}
        </h4>
        <p class="catalog-product__price main-font">$ {{ item.price }}</p>
        <div class="catalog-product__colors"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {useProductStore} from "@/store/productStore";
import MyColorFilter from "./MyColorFilter.vue";
import MySizeFilter from "./MySizeFilter.vue";
import MyCategoryFilter from "./MyCategoryFilter.vue";

export default {
  name: "MyCatalog",
  components: {
    MyColorFilter,
    MySizeFilter,
    MyCategoryFilter,
  },

  setup() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },

  mounted() {
    this.fullyFilteredProducts = this.products;
  },

  data() {
    return {
      currentProduct: {},
      currentCategory: "",
      products: this.productStore.products,
      fullyFilteredProducts: [],
      filteredProducts: {
        filteredByColor: this.productStore.products,
        filteredBySize: this.productStore.products,
        filteredByCategory: this.productStore.products,
      },
    };
  },

  methods: {
    setCurrentProduct(index) {
      this.currentProduct = {};

      this.currentProduct = this.fullyFilteredProducts[index];
      this.productStore.currentId = this.currentProduct.id;
    },
    updateFilteredProducts() {
      this.filteredProducts = [];
      for (let item of this.productStore.products) {
        if (item.category === this.currentCategory) {
          this.filteredProducts.push(item);
        }
      }
    },
    closeAllFilters() {
      for (let item in this.productStore.filters) {
        this.productStore.filters[item].isFilterVisible = false;
      }
    },
    openFilter(index) {
      this.productStore.filters[index].isFilterVisible = true;
    },
    updateProductsByColor($event) {
      this.filteredProducts.filteredByColor = $event;
    },
    updateProductsBySize($event) {
      this.filteredProducts.filteredBySize = $event;
    },
    updateProductsByCategory($event) {
      this.filteredProducts.filteredByCategory = $event;
    },
  },
  computed: {
    filtersCounter() {
      return this.productStore.filters.length;
    },
  },

  watch: {
    filteredProducts: {
      handler() {
        this.fullyFilteredProducts = this.products;
        let match = [];

        this.fullyFilteredProducts.forEach((product) => {
          for (let elem of this.filteredProducts.filteredByColor) {
            if (product === elem) {
              match.push(product);
            }
          }
        });
        this.fullyFilteredProducts = match;
        match = [];

        this.fullyFilteredProducts.forEach((product) => {
          for (let elem of this.filteredProducts.filteredBySize) {
            if (product === elem) {
              match.push(product);
            }
          }
        });
        this.fullyFilteredProducts = match;
        match = [];

        this.fullyFilteredProducts.forEach((product) => {
          for (let elem of this.filteredProducts.filteredByCategory) {
            if (product === elem) {
              match.push(product);
            }
          }
        });
        this.fullyFilteredProducts = match;
        match = [];
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars";

.catalog__products {
  position: relative;

  display: grid;
  gap: 20px;
  grid-template-columns: repeat(12, 1fr);
  justify-items: center;
}

.catalog__product {
  grid-column-start: span 4;
  margin-bottom: 26px;
}

.catalog-product__title {
  margin-top: 21px;

  line-height: 19px;
  color: $main-font-color;
}

.catalog-product__price {
  margin-top: 9px;

  line-height: 19px;
  color: $main-font-color;
}

.catalog__filters {
  margin-top: 11px;
  margin-bottom: 21px;
}

.catalog-filters__item {
  margin-right: 52px;
}

.catalog-filters__btn {
  align-items: center;
}

.filters-btn__plus {
  display: block;
  margin-left: 11px;
  width: 11px;
  height: 11px;
  background: url(../assets/images/plus.svg) center center no-repeat;
}

.filters-btn__minus {
  display: block;
  margin-left: 11px;
  width: 11px;
  height: 11px;
  background: url(../assets/images/minus.svg) center center no-repeat;
}
</style>
