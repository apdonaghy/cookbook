import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAnalytics from 'vue-analytics'
import {library} from "@fortawesome/fontawesome-svg-core";

import {
  faTrash, faLink, faListUl,faRandom, faUndo, faStar, faEnvelope, faSpinner, faTimes, faUpload
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faLink, faListUl,faRandom, faUndo, faStar, faEnvelope, faSpinner, faTimes, faUpload);

Vue.config.productionTip = false;

// Google Analytics id
Vue.use(VueAnalytics, {
  id: 'UA-174260847-1',
  router
})


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
