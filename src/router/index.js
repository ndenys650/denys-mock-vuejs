import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FAQ from '@/components/FAQ'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: FAQ
    }
  ]
})
