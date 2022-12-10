<template>
    <div class="colors">
        <div class="colors__wrapper grid">
            <div
                v-for="(item, index) in productStore.filters.color.options"
                :key="index"
                @click="toggleColor(index)"
                :class="{
                    colors__item_active:
                        productStore.filters.color.options[index].isActive,
                }"
                class="colors__item"
            >
                <img :src="item.imageUrl" alt="" class="colors__image" />
                <span class="colors__title">{{ item.name }}</span>
            </div>
        </div>
        <div class="colors__buttons">
            <button
                @click="
                    clearCurrentColors();
                    filterProductsByColor();
                    closeColorFilter();
                "
                class="colors__btn"
            >
                Clear
            </button>
            <button
                @click="
                    filterProductsByColor();
                    closeColorFilter();
                "
                class="colors__btn colors__btn_dark"
            >
                Apply
            </button>
        </div>
    </div>
</template>

<script>
import { useProductStore } from "../store/productStore";

export default {
    name: "MyColorFilter",
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
            currentColors: [],
            match: [],
        };
    },
    methods: {
        toggleColor(index) {
            this.productStore.filters.color.options[index].isActive =
                !this.productStore.filters.color.options[index].isActive;
            this.currentColors = [];
            for (let elem of this.productStore.filters.color.options) {
                if (elem.isActive) {
                    this.currentColors.push(elem.key);
                }
            }
        },
        clearCurrentColors() {
            this.currentColors = [];
            for (let elem of this.productStore.filters.color.options) {
                elem.isActive = false;
            }
        },
        filterProductsByColor() {
            this.filteredProducts = this.productsProp;
            if (this.currentColors.length === 0) {
                this.$emit("updateProductsByColor", this.filteredProducts);
                return;
            }
            this.match = [];

            this.filteredProducts.forEach((product) => {
                for (let elem of this.currentColors) {
                    if (product.availableColors.includes(elem)) {
                        this.match.push(product);
                        return;
                    }
                }
            });

            // if (this.match.length === 0) {
            //     this.match = this.filteredProducts;
            // }

            this.$emit("updateProductsByColor", this.match);
        },

        closeColorFilter() {
            this.$emit("closeColorFilter");
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars";
.colors {
    position: absolute;
    top: 0;
    left: 0;

    background-color: #fff;
    width: calc(720px / 1460px * 100%);
    border: 1px solid #cfcfcf;
}

.colors__wrapper {
    padding: 23px 25px 55px;
    grid-template-columns: repeat(12, 1fr);
    flex-wrap: wrap;
}

.colors__item {
    display: flex;
    grid-column-start: span 4;
    margin-bottom: 15px;
    width: 170px;

    color: #b6b6b6;

    cursor: pointer;

    &:hover {
        color: $main-font-color;
    }
}

.colors__item_active {
    color: $main-font-color;
}

.colors__image {
    margin-right: 10px;
    width: 15px;
    height: 15px;
}

.colors__title {
    font-family: "work-sans", Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    text-transform: capitalize;
}

.colors__btn {
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
.colors__btn_dark {
    text-transform: uppercase;
    color: #fff;

    background-color: $main-font-color;

    &:hover {
        color: #cfcfcf;
    }
}
</style>
