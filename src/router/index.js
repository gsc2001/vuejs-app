import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Users from '../views/Users.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/users',
        name: 'Users',
        component: Users
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
