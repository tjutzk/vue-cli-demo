import Vue from 'vue'
import Router from 'vue-router'
// import { resolve } from 'dns';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/commons/Home.vue'],resolve),
    }
  ]
})
