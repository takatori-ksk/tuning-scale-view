import Vue from 'vue'
import App from './App.vue'

//import VueGoodTablePlugin from 'vue-good-table';
// import the styles 
//import 'vue-good-table/dist/vue-good-table.css'

import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
//Vue.use(VueGoodTablePlugin);
//Vue.use(window.vueGoodTable.default);
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
