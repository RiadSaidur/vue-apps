import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import New from './components/New'
import Edit from './views/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/:id/edit',
      name: 'edit',
      component: Edit,
      props: true
    }
  ]
})
