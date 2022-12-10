<template>
    <div class="categories">
        <div class="categories__wrapper grid">
            <div
                v-for="(item, index) in productStore.filters.category.options"
                :key="index"
                @click="toggleCategory(index)"
                :class="{
                    categories__item_active:
                        productStore.filters.category.options[index].isActive,
                }"
                class="categories__item flex"
            >
                <div
                    :class="{
                        categories__checkbox_active:
                            productStore.filters.category.options[index]
                                .isActive,
                    }"
                    class="categories__checkbox"
                ></div>
                <span class="categories__title">{{ item.name }}</span>
            </div>
        </div>
        <div class="categories__buttons">
            <button
                @click="
                    clearCurrentCategories();
                    filterProductsByCategory();
                    closeCategoryFilter();
                "
                class="categories__btn"
            >
                Clear
            </button>
            <button
                @click="
                    filterProductsByCategory();
                    closeCategoryFilter();
                "
                class="categories__btn categories__btn_dark"
            >
                Apply
            </button>
        </div>
    </div>
</template>

<script>
import { useProductStore } from "../store/productStore";

export default {
    name: "MyCategoryFilter",
    setup() {
        const productStore = useProductStore();
        return {
            productStore,
        };
    },

    props: {
        productsProp: {
            type: Array,
        },
    },

    data() {
        return {
            filteredProducts: [],
            currentCategories: [],
            match: [],
        };
    },

    methods: {
        toggleCategory(index) {
            this.productStore.filters.category.options[index].isActive =
                !this.productStore.filters.category.options[index].isActive;
            this.currentCategories = [];
            for (let elem of this.productStore.filters.category.options) {
                if (elem.isActive) {
                    this.currentCategories.push(elem.key);
                }
            }
        },
        clearCurrentCategories() {
            this.currentCategories = [];
            for (let elem of this.productStore.filters.category.options) {
                elem.isActive = false;
            }
        },
        filterProductsByCategory() {
            this.filteredProducts = this.productsProp;
            if (this.currentCategories.length === 0) {
                this.$emit("updateProductsByCategory", this.filteredProducts);
                return;
            }
            this.match = [];

            this.filteredProducts.forEach((product) => {
                for (let elem of this.currentCategories) {
                    if (product.category === elem) {
                        this.match.push(product);
                        return;
                    }
                }
            });

            this.$emit("updateProductsByCategory", this.match);
        },

        closeCategoryFilter() {
            this.$emit("closeCategoryFilter");
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars";

.categories {
    position: absolute;
    top: 0;
    left: 0;

    background-color: #fff;
    width: calc(720px / 1460px * 100%);
    border: 1px solid #cfcfcf;
}

.categories__wrapper {
    padding: 23px 25px 25px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-auto-flow: column;
}

.categories__item {
    display: flex;
    margin-bottom: 15px;
    width: 170px;

    color: #b6b6b6;

    cursor: pointer;

    &:hover {
        color: $main-font-color;
    }
}

.categories__item_active {
    color: $main-font-color;
}

.categories__checkbox {
    margin-right: 10px;
    width: 16px;
    height: 16px;

    border: 1px solid #bdbdbd;
}

.categories__checkbox_active {
    position: relative;

    border: 1px solid #90caf9;
    background-color: #90caf9;

    &::after {
        content: "";
        position: absolute;
        left: 4px;
        top: 1px;
        width: 6px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
}

.categories__title {
    font-family: "work-sans", Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    text-transform: capitalize;
}

.categories__btn {
    padding: 16px 0;
    width: 50%;

    font-family: "work-sans", Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #9c9c9c;

    border-top: 1px solid #b6b6b6;

    &:hover {
        color: $main-font-color;
    }
}
.categories__btn_dark {
    text-transform: uppercase;
    color: #fff;

    background-color: $main-font-color;

    &:hover {
        color: #cfcfcf;
    }
}
</style>
