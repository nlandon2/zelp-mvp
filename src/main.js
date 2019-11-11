import Vue from "vue";
import * as Vue2Leaflet from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Vue2Leaflet);

new Vue({
  render: h => h(App)
}).$mount("#app");
