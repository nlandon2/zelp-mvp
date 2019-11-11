import Vue from "vue";
import * as Vue2Leaflet from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import App from "./App.vue";
import store from "./vuex/store";

Vue.config.productionTip = false;

Vue.use(Vue2Leaflet);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
