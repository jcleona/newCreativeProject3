import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Will from '@/components/Will'
import Will from '../components/Will.vue';
import editWill from '../components/editWill.vue';
import ViewWill from '../components/ViewWill.vue';
import ListWills from '../components/ListWills.vue';

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
    },
     {
      path: '/ViewWill',
      name: 'View Will',
      component: ViewWill
    },
     {
      path: '/listWills',
      name: 'List Will',
      component: ListWills
    },
     {
      path: '/editWill',
      name: 'Edit Will',
      component: editWill
    }
  ]
})
