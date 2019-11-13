import Vue from "vue";
import App from "./App.vue";
import * as Vue2GoogleMaps from "vue2-google-maps";
import store from "./vuex/store";

Vue.config.productionTip = false;

Vue.use(Vue2GoogleMaps, {
  load: {
    key: "YOUR KEY HERE",
    libraries: "places,drawing,geometry, directions"
  }
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
