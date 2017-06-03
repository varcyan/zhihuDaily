import Vue from 'vue'
import Router from 'vue-router'

// 引入需要的视图组件
import Main from '@/views/index'
import Detail from '@/views/detail'

// css reset
import ResetCss from '@/assets/css/reset.css'
import HeaderCss from '@/assets/css/header.css'
// import ToolsCss from '@/assets/css/tools.css'


Vue.use(Router)

// 配置路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Main
    },
    {
      path: '/test',
      name: 'Detail',
      component: Detail
    }
  ]
})
