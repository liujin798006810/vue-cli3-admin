import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './plugins/element.js'
import '@/element-variables.scss'
import './assets/css/base.css'
import './assets/css/index.scss'

import '@/assets/font/iconfont.css'


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')