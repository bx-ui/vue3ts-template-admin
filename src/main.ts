import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "lib-flexible"; // 移动端适配

import "@/assets/css/zcm-main.css";

import ElementPlus from "element-plus";
import "./styles/element-variables.scss";

import "@/utils/auth.ts";

import "@/styles/public.scss";

createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount("#app");
