import {createApp} from "vue";
import "./assets/scss/main.scss";
import {createPinia} from "pinia";
import App from "./App.vue";
import router from "./router";
import vClickOutside from "click-outside-vue3";

const pinia = createPinia();

pinia.use((context) => {
    const timerStore = context.store.$id;

    const serializer = {
        serialize: JSON.stringify,
        deserialize: JSON.parse,
    };

    const fromStorage = serializer.deserialize(
        window.localStorage.getItem(timerStore)
    );

    if (fromStorage) {
        context.store.$patch(fromStorage);
    }

    context.store.$subscribe((mutation, state) => {
        window.localStorage.setItem(timerStore, serializer.serialize(state));
    });
});

const app = createApp(App).use(router);

app.use(vClickOutside);
app.use(pinia);
app.mount("#app");
