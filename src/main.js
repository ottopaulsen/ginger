import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faSignInAlt,
  faSignOutAlt,
  faEdit
} from "@fortawesome/free-solid-svg-icons";

library.add(faSignInAlt, faSignOutAlt, faEdit);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
