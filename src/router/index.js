import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Will from '@/components/Will'
import Will from '../components/Will.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
     {
      path: '/Will',
      name: 'Will',
      component: Will
    }
  ]
})
