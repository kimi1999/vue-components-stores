import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Index from "../views/Index.vue"
import IndexChild from "../views/IndexChild.vue"

const router = new Router({
  // 可选 有这个配置时代表启用了路由的 history模式（http://127.0.0.1:8891/）
  // 不再是hash模式（http://127.0.0.1:8891/#/）
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'child',
          name: 'IndexChild',
          component: IndexChild
        }
      ]
    }

  ]
})

export default router
