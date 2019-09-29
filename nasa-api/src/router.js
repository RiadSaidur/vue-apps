import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component:() => import('./views/About.vue')
    },
    {
      path: '/photofday',
      name: 'photofday',
      component:() => import('./components/PhotoOfDay.vue')
    },
    {
      path: '/mars',
      name: 'mars',
      component:() => import('./components/Mars.vue')
    }
  ]
})
