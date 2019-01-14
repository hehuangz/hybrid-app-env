import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home/index.vue')
        },
        {
            path: '/test',
            name: 'Test',
            component: () => import('../views/Test/index.vue')
        },
        {
            path: '/cdk/check',
            name: 'CdkCheck',
            component: () => import('../views/Cdk/Check.vue')
        }
    ]
})
