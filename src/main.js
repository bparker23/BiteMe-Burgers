import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'
import mock2 from './mock-data2.js'
import mock3 from './mock-data3.js'

Vue.config.productionTip = false

let data = {
  products: mock,
  sides: mock2,
  drinks:mock3,
  cart: [],
  numberOfItems: 0,
}


new Vue({
  router,
  data,
  render: h => h(App),

}).$mount('#app')
