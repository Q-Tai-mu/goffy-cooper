/*
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-11-17 13:16:24
 * @LastEditTime: 2021-11-22 17:41:19
 * @LastEditors: MArio
 */

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import AtComponents from "at-ui"
import 'at-ui-style'

Vue.config.productionTip = false

Vue.use(AtComponents)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
