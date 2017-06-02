import Vue from 'vue'
import Router from 'vue-router'

// 引入需要的视图组件
import Index from '@/views/index'

// css reset
import ResetCss from '@/assets/css/reset.css'
// import ToolsCss from '@/assets/css/tools.css'


Vue.use(Router)

// 配置路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
