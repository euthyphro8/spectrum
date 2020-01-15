import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contract from '../views/contracts/Contract.v1.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Spectrum | Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'Spectrum | About'
    }
  },
  {
    path: '/contract',
    name: 'contract',
    component: Contract,
    meta: {
      title: 'Spectrum | Contract'
    }
  }
]

const router = new VueRouter({
  routes
});

const DEFAULT_TITLE = 'Spectrum';
router.afterEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router