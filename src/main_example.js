import Vue from "vue";
import App from "./App_example.vue";

import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
