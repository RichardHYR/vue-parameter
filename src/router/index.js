import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Parameter',
      component: () => import('@/views/Parameter'),
      meta: {
        keepAlive: false, // 需要被缓存
        // helpType: 1
      },
    },
  ]
})
