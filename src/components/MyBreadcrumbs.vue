<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li
        class="breadcrumbs__item"
        v-for="(item, index) in breadcrumbs"
        :key="index"
      >
        <button class="breadcrumbs__btn" @click="goTo(index)">
          {{ item.name }}
        </button>
        <span class="breadcrumbs__divider"> /</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyBreadcrumbs',
  data() {
    return {
      breadcrumbs: [],
    };
  },

  mounted() {
    this.breadcrumbs = this.$route.meta?.breadcrumb;
    console.log(this.$route.meta);
  },

  methods: {
    goTo(index) {
      this.$router.push(this.breadcrumbs[index].link);
    },
  },

  watch: {
    $route() {
      this.breadcrumbs = this.$route.meta?.breadcrumb;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/scss/vars';
.breadcrumbs {
  margin-bottom: 43px;
}
.breadcrumbs__list {
  display: flex;
}
.breadcrumbs__item {
  &:last-child {
    .breadcrumbs__btn {
      color: $main-font-color;
    }
    .breadcrumbs__divider {
      display: none;
    }
  }
}
.breadcrumbs__btn {
  margin-right: 10px;
  color: #bdbdbd;
  transition: color 0.2s ease;

  &:hover {
    color: $main-font-color;
  }
}
.breadcrumbs__divider {
  margin-right: 10px;
  color: #bdbdbd;
}
</style>
