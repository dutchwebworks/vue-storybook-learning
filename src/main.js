import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/scss/style.scss'; // https://vueschool.io/articles/vuejs-tutorials/globally-load-sass-into-your-vue-js-applications/

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
