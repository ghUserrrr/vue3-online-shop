<template>
    <MySpecialOffer />
    <div class="container">
        <MyHeader />
        <MyCatalog />
        <MyBanner />
    </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MySpecialOffer from "./components/MySpecialOffer.vue";
import MyCatalog from "./components/MyCatalog.vue";
import MyBanner from "./components/MyBanner.vue";

import { useProductStore } from "./store/productStore";

export default {
    name: "App",
    components: { MyHeader, MySpecialOffer, MyCatalog, MyBanner },
    setup() {
        const productStore = useProductStore();
        return {
            productStore,
        };
    },
};
</script>

<style lang="scss">
@import "./assets/scss/vars";
</style>
