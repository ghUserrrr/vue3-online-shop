<template>
    <div class="sizes">
        <div class="sizes__wrapper grid">
            <div
                v-for="(item, index) in productStore.filters.size.options"
                :key="index"
                @click="toggleSize(index)"
                :class="{
                    sizes__item_active:
                        productStore.filters.size.options[index].isActive,
                }"
                class="sizes__item flex"
            >
                <div
                    :class="{
                        sizes__checkbox_active:
                            productStore.filters.size.options[index].isActive,
                    }"
                    class="sizes__checkbox"
                ></div>
                <span class="sizes__title">{{ item.name }}</span>
            </div>
        </div>
        <div class="sizes__buttons">
            <button
                @click="
                    clearCurrentSizes();
                    filterProductsBySize();
                    closeSizeFilter();
                "
                class="sizes__btn"
            >
                Clear
            </button>
            <button
                @click="
                    filterProductsBySize();
                    closeSizeFilter();
                "
                class="sizes__btn sizes__btn_dark"
            >
                Apply
            </button>
        </div>
    </div>
</template>

<script>
import { useProductStore } from "../store/productStore";

export default {
    name: "MySizeFilter",
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
            currentSizes: [],
            match: [],
        };
    },

    methods: {
        toggleSize(index) {
            this.productStore.filters.size.options[index].isActive =
                !this.productStore.filters.size.options[index].isActive;
            this.currentSizes = [];
            for (let elem of this.productStore.filters.size.options) {
                if (elem.isActive) {
                    this.currentSizes.push(elem.key);
                }
            }
        },
        clearCurrentSizes() {
            this.currentSizes = [];
            for (let elem of this.productStore.filters.size.options) {
                elem.isActive = false;
            }
        },
        filterProductsBySize() {
            this.filteredProducts = this.productsProp;
            if (this.currentSizes.length === 0) {
                this.$emit("updateProductsBySize", this.filteredProducts);
                return;
            }
            this.match = [];

            this.filteredProducts.forEach((product) => {
                for (let elem of this.currentSizes) {
                    if (product.availableSizes.includes(elem)) {
                        this.match.push(product);
                        return;
                    }
                }
            });

            this.$emit("updateProductsBySize", this.match);
        },

        closeSizeFilter() {
            this.$emit("closeSizeFilter");
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars";

.sizes {
    position: absolute;
    top: 0;
    left: 0;

    background-color: #fff;
    width: calc(720px / 1460px * 100%);
    border: 1px solid #cfcfcf;
}

.sizes__wrapper {
    padding: 23px 25px 25px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(7, 1fr);
    grid-auto-flow: column;
}

.sizes__item {
    display: flex;
    margin-bottom: 15px;
    width: 170px;

    color: #b6b6b6;

    cursor: pointer;

    &:hover {
        color: $main-font-color;
    }
}

.sizes__item_active {
    color: $main-font-color;
}

.sizes__checkbox {
    margin-right: 10px;
    width: 16px;
    height: 16px;

    border: 1px solid #bdbdbd;
}

.sizes__checkbox_active {
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

.sizes__title {
    font-family: "work-sans", Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    text-transform: capitalize;
}

.sizes__btn {
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
.sizes__btn_dark {
    text-transform: uppercase;
    color: #fff;

    background-color: $main-font-color;

    &:hover {
        color: #cfcfcf;
    }
}
</style>
