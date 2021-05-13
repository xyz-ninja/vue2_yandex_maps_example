import Vue from 'vue'
import App from './App.vue'
import YMapPlugin from 'vue-yandex-maps';

Vue.config.productionTip = false;
Vue.use(YMapPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app');
