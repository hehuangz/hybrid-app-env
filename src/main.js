import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import apis from './api/index'
import utils from './utils'
import { Button, Cell, Toast } from 'vant'
import './components'
import './assets/less/index.less'
// 网络监听
import networkListening from './utils/networkListening'
Vue.use(networkListening)
Vue.use(Button)
Vue.use(Cell)
Vue.use(Toast)
// 全局配置Toast
Toast.setDefaultOptions({
    forbidClick: true,
    duration: 1500
})
// 注册 bridge.js 到 window
utils.windowBind(require('./utils/jsbridge.js'))
Vue.prototype.$Toast = Toast
Vue.prototype.$apis = apis
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
