<template>
    <div class="offer flex">
        <h3 class="offer__title m-auto">Free Shipping over $75!</h3>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../assets/scss/vars";

.offer {
    align-items: center;
    width: 100%;
    height: 50px;

    background-color: #000;
}

.offer__title {
    font-family: "work-sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;
}
</style>
