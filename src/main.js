import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// //快速点击插件
// import fastClick from "fastClick";
//图片懒加载
import VueLazyLoad from 'vue-lazyload'
import api from './utils/api'
import component from './components'

Vue.use(VueLazyLoad)
Vue.use(api)
Vue.use(component)
Vue.use(ElementUI)
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
// // 加载FastClick
// fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // components: {
  //   App
  // },
  // template: '<App/>'
})
