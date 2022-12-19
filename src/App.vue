<template>
  <MySpecialOffer />
  <div class="container">
    <MyHeader />
    <MyCatalog />
  </div>
</template>

<script>
import MyCatalog from "./components/MyCatalog.vue";
import MyHeader from "./components/MyHeader.vue";
import MySpecialOffer from "./components/MySpecialOffer.vue";

export default {
  name: "App",
  components: { MySpecialOffer, MyHeader, MyCatalog },
};
</script>

<style lang="scss"></style>
