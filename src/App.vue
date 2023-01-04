<template>
  <MySpecialOffer />
  <div class="container">
    <MyHeader />
    <MyBreadcrumbs />
    <RouterView />
  </div>
</template>

<script>
import MyBreadcrumbs from './components/MyBreadcrumbs.vue';
import MyHeader from './components/MyHeader.vue';
import MySpecialOffer from './components/MySpecialOffer.vue';

export default {
  name: 'App',
  components: { MyHeader, MySpecialOffer, MyBreadcrumbs },
};
</script>

<style lang="scss"></style>
