import Vue from "vue";
import VueYoutube from "vue-youtube";
import App from "./App.vue";
import "./assets/style.css";
Vue.use(VueYoutube);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
