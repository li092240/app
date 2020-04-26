import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
//全局组件
import SubBook from './components/Booklist/SubBook.vue'



//应用mintui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './font/fonts.js'
import './font/fonts.css'
//mui
import './components/lib/mui/css/mui.css'
import mui from './components/lib/mui/js/mui.min.js'
import './components/lib/mui/fonts/mui.ttf'

axios
import axios from 'axios'
axios.defaults.headers.post['Content-type'] = 'application/json'
Vue.prototype.$axios = axios


//注册全局组件
Vue.component('SubBook',SubBook)


Vue.use(Mint)
Vue.prototype.mui=mui



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
  