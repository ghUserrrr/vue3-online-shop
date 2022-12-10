<template>
    <div class="banner">
        <div class="banner__content-wrapper">
            <h2 class="banner__title">NEW collections</h2>
            <p class="banner__text">
                Check out our high-quality and affordable fashion!
            </p>
            <button class="banner__btn btn btn-primary m-auto flex">
                Shop now
            </button>
        </div>
    </div>
</template>

<script></script>

<style scoped lang="scss">
@import "../assets/scss/vars";

.banner {
    padding-top: 364px;
    width: 100%;
    height: 930px;

    background: url(../assets/images/banner.jpg) center no-repeat;
    // filter: grayscale(1);
}

.banner__content-wrapper {
    filter: grayscale(0);
}

.banner__title {
    margin-bottom: 9px;

    text-align: center;
    font-size: 50px;
    line-height: 59px;
    text-transform: uppercase;

    color: $main-font-color;
}
.banner__text {
    margin-bottom: 46px;

    text-align: center;
    font-family: "work-sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: $main-font-color;
}
.banner__btn {
    padding-left: 81px;
    padding-right: 81px;
}
</style>
