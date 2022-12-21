import { createApp } from "vue";
import "./assets/scss/main.scss";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import vClickOutside from "click-outside-vue3";

const pinia = createPinia();
const app = createApp(App).use(router);

app.use(vClickOutside);
app.use(pinia);
app.mount("#app");
