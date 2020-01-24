import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contract1 from '../views/contracts/Contract.v1.vue';
import Contract2 from '../views/contracts/Contract.v2.vue';

Vue.use(VueRouter);

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
        path: '/contract-v1',
        name: 'contract',
        component: Contract1,
        meta: {
            title: 'Spectrum | Contract v1'
        }
    },
    {
        path: '/contract-v2',
        name: 'contract',
        component: Contract2,
        meta: {
            title: 'Spectrum | Contract v2'
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