import "./assets/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import Loader from "@/components/Ui/Loader.vue"; 
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.component("GlobalLoader", Loader);
app.use(createPinia());
app.use(router);

app.mount("#app");
