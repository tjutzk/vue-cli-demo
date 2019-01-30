import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/commons/Home.vue'
import Content from '@/components/pages/content.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/content'
    },
    {
      path:'/',
      name:'home',
      component:Home,
      children: [
        {
			path: '/content',
			name:'content',
			component:Content
        }
      ]
    }
  ]
})

