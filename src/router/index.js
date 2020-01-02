import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import addNews from '@/components/addNews'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/addNews',
            name: '/addNews',
            component: addNews
        }
    ]
})
