<template>
  <MySpecialOffer />
  <div class="container">
    <MyHeader />
    <RouterView />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MySpecialOffer from "./components/MySpecialOffer.vue";

export default {
  name: "App",
  components: { MyHeader, MySpecialOffer },
};
</script>

<style lang="scss"></style>
